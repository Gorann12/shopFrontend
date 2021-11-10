import { render, screen } from "@testing-library/react";
import CreateCategoryHeader from "../../../components/app/category/create/CreateCategoryHeader";

describe("CreateCategoryHeader", () => {
  it("Should have h1 with text which will include Create Category", () => {
    render(<CreateCategoryHeader />);

    const h1 = screen.queryByText(/create category/i);

    expect(h1).toBeInTheDocument();
    expect(h1.tagName.toLowerCase()).toBe("h1");
  });
});
