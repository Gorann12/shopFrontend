import { Route, Switch } from "react-router-dom";
import CreateListPage from "../app/list/create/CreateListPage";
import ListDetailsPage from "../app/list/details/ListDetailsPage";
import ListsPage from "../app/list/list-all/ListsPage";
import UpdateListPage from "../app/list/update/UpdateListPage";
import ManageItemsPage from "../app/list/manage-items/ManageItemsPage";

const ListRoutes = () => {
  return (
    <Switch>
      <Route path="/lists" component={ListsPage} exact />
      <Route path="/lists/create" component={CreateListPage} exact />
      <Route path="/lists/:id" component={ListDetailsPage} exact />
      <Route path="/lists/:id/update" component={UpdateListPage} />
      <Route path="/lists/:id/manage-items" component={ManageItemsPage} />
    </Switch>
  );
};

export default ListRoutes;
