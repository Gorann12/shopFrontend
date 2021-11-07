import CategoryItem from "./CategoryItem";
import EmptyState from "../../../utils/EmptyState";
import Table from "../../../ui/table/Table";

const CategoryList = ({ categories }) => {
  return (
    <>
      {categories.length > 0 ? (
        <Table>
          <tbody>
            {categories.map((category) => (
              <CategoryItem key={category._id} category={category} />
            ))}
          </tbody>
        </Table>
      ) : (
        <EmptyState
          message="You haven't created any category"
          url="/categories/create"
        />
      )}
    </>
  );
};

export default CategoryList;
