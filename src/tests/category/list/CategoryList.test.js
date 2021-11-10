import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CategoryList from "../../../components/app/category/list/CategoryList";
import mockCategories from "../mock-data/mockCategories.json";

describe("CategoryList", () => {
  it("Shouldn't display a table if categories are empty", () => {
    render(<CategoryList categories={[]} />, { wrapper: MemoryRouter });

    const table = screen.queryByTestId("table");
    expect(table).not.toBeInTheDocument();
  });
  it("Should display a link if categories are empty", () => {
    render(<CategoryList categories={[]} />, {
      wrapper: MemoryRouter,
    });

    const link = screen.queryByRole("link");

    expect(link).toBeInTheDocument();
  });
  it("Should display categories", () => {
    render(<CategoryList categories={mockCategories} />, {
      wrapper: MemoryRouter,
    });

    const tableRows = screen.queryAllByRole("row");
    expect(tableRows).toHaveLength(mockCategories.length);
  });
});
