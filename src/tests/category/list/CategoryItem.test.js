import { render, screen } from "@testing-library/react";
import CategoryItem from "../../../components/app/category/list/CategoryItem";
import mockCategory from "../mock-data/mockCategory.json";

describe("CategoryItem", () => {
  it("Should accept category prop and display it to the screen", () => {
    render(
      <table>
        <tbody>
          <CategoryItem category={mockCategory} />
        </tbody>
      </table>
    );

    const categoryName = screen.queryByText(mockCategory.name);
    const categoryDescription = screen.queryByText(mockCategory.description);

    expect(categoryName).toBeInTheDocument();
    expect(categoryDescription).toBeInTheDocument();
  });
});
