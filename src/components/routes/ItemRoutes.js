import { Route } from "react-router";
import CreateItemPage from "../app/item/create/CreateItemPage";
import ItemListPage from "../app/item/list/ItemListPage";
import UpdateItemPage from "../app/item/update/UpdateItemPage";

const ItemRoutes = () => {
  return (
    <>
      <Route path="/items" component={ItemListPage} exact />
      <Route path="/items/create" component={CreateItemPage} />
      <Route path="/items/:id/update" component={UpdateItemPage} />
    </>
  );
};

export default ItemRoutes;
