import { render, screen } from "@testing-library/react";
import CategoryListHeader from "../../../components/app/category/list/CategoryListHeader";

describe("CategoryListHeader", () => {
  it("Should have h1 tag with text which will include categories", () => {
    render(<CategoryListHeader />);

    const h1 = screen.queryByText(/categories/i);

    expect(h1).toBeInTheDocument();
    expect(h1.tagName.toLowerCase()).toBe("h1");
  });
});
