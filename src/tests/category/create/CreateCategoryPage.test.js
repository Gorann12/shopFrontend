import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { act } from "react-dom/test-utils";
import CreateCategoryPage from "../../../components/app/category/create/CreateCategoryPage";

axios.post = jest.fn();
axios.get = jest.fn();

const mockCategory = { name: "Category 1", description: "Empty description" };

describe("CreateCategoryPage", () => {
  it("Shouldn't show alert initially", () => {
    render(<CreateCategoryPage />);

    const alert = screen.queryByRole("alert");

    expect(alert).not.toBeInTheDocument();
  });
  it("Should show success alert when form is submitted", async () => {
    const promise = Promise.resolve(mockCategory);
    axios.post.mockImplementationOnce(() => promise);
    render(<CreateCategoryPage />);

    const submitButton = screen.queryByRole("button");
    userEvent.click(submitButton);

    const alert = await screen.findByRole("alert");
    expect(alert).toBeInTheDocument();

    await act(() => promise);
  });
  it("Should show loading while request is active", async () => {
    const promise = Promise.resolve(mockCategory);
    axios.post.mockImplementation(() => {
      setTimeout(() => promise, 2000);
    });
    render(<CreateCategoryPage />);

    const submitButton = screen.queryByRole("button");
    userEvent.click(submitButton);

    const loadingSpinner = screen.queryByTestId("loading-spinner");

    expect(loadingSpinner).toBeInTheDocument();
    await act(() => promise);
  });
});
