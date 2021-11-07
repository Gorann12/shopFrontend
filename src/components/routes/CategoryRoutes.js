import { Route } from "react-router-dom";
import CreateCategoryPage from "../app/category/create/CreateCategoryPage";
import CategoryListPage from "../app/category/list/CategoryListPage";

const CategoryRoutes = () => {
  return (
    <>
      <Route path="/categories" component={CategoryListPage} exact />
      <Route path="/categories/create" component={CreateCategoryPage} exact />
    </>
  );
};

export default CategoryRoutes;
