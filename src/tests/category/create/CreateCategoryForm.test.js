import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateCategoryForm from "../../../components/app/category/create/CreateCategoryForm";

describe("CreateCategoryForm component", () => {
  it("Should have input tag, with label, for name", () => {
    render(<CreateCategoryForm />);

    const nameInput = screen.queryByLabelText(/name/i);

    expect(nameInput).toBeInTheDocument();
    expect(nameInput.tagName.toLowerCase()).toBe("input");
  });
  it("Should have textarea tag, with label, for description", () => {
    render(<CreateCategoryForm />);

    const descriptionTextarea = screen.queryByLabelText(/description/i);
    expect(descriptionTextarea).toBeInTheDocument();
    expect(descriptionTextarea.tagName.toLowerCase()).toBe("textarea");
  });
  it("Should have submit button", () => {
    const mockSubmit = jest.fn();
    render(<CreateCategoryForm onSubmit={mockSubmit} />);

    const button = screen.queryByRole("button");
    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(mockSubmit).toBeCalled();
  });
  it("Should have maxLength and required validations on name input", () => {
    render(<CreateCategoryForm />);

    const nameInput = screen.queryByLabelText(/name/i);

    expect(nameInput.getAttribute("maxLength")).toBeDefined();
    expect(nameInput.getAttribute("required")).toBeDefined();
  });
  it("Should have maxLength validation for description", () => {
    render(<CreateCategoryForm />);

    const descriptionTextarea = screen.queryByLabelText(/description/i);

    expect(descriptionTextarea.getAttribute("maxLength")).toBeDefined();
  });
  it("Shouldn't have required validation on description", () => {
    render(<CreateCategoryForm />);

    const descriptionTextarea = screen.queryByLabelText(/description/i);

    expect(descriptionTextarea.getAttribute("required")).toBeNull();
  });
  it("Should submit inputted data", () => {
    const mockCategory = {
      name: "Category 1",
      description: "Empty description",
    };
    const mockSubmit = jest.fn();
    render(<CreateCategoryForm onSubmit={mockSubmit} />);

    const nameInput = screen.queryByLabelText(/name/i);
    const descriptionInput = screen.queryByLabelText(/description/i);
    const submitButton = screen.queryByRole("button");

    userEvent.type(nameInput, mockCategory.name);
    userEvent.type(descriptionInput, mockCategory.description);
    userEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledWith(mockCategory);
  });
});
