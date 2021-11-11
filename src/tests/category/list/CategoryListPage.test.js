import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import axios from "axios";
import CategoryListPage from "../../../components/app/category/list/CategoryListPage";
import mockCategories from "../mock-data/mockCategories.json";

axios.get = jest.fn();

describe("CategoryListPage", () => {
  it("Should have loading spinner initially", async () => {
    const promise = Promise.resolve({ data: mockCategories });
    axios.get.mockImplementationOnce(() => promise);
    render(
      <BrowserRouter>
        <CategoryListPage />
      </BrowserRouter>
    );
    const loadingSpinner = screen.queryByTestId("loading-spinner");

    expect(loadingSpinner).toBeInTheDocument();
    await act(() => promise);
  });
});
