import { Route } from "react-router-dom";
import ShopListPage from "../app/shop/list/ShopListPage";
import CreateShopPage from "../app/shop/create/CreateShopPage";

const ShopRoutes = () => {
  return (
    <>
      <Route path="/shops" component={ShopListPage} exact />
      <Route path="/shops/create" component={CreateShopPage} exact />
    </>
  );
};

export default ShopRoutes;
