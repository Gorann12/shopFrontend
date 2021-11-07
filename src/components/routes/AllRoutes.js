import { Routes, Route } from "react-router-dom";
import CreateCategoryPage from "../app/category/create/CreateCategoryPage";
import CategoryListPage from "../app/category/list/CategoryListPage";
import ShopListPage from "../app/shop/list/ShopListPage";
import CreateShopPage from "../app/shop/create/CreateShopPage";
import CreateItemPage from "../app/item/create/CreateItemPage";
import ItemListPage from "../app/item/list/ItemListPage";
import UpdateItemPage from "../app/item/update/UpdateItemPage";
import CreateListPage from "../app/list/create/CreateListPage";
import ListDetailsPage from "../app/list/details/ListDetailsPage";
import ListsPage from "../app/list/list-all/ListsPage";
import UpdateListPage from "../app/list/update/UpdateListPage";
import ManageItemsPage from "../app/list/manage-items/ManageItemsPage";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Categories */}
      <Route path="/categories" element={<CategoryListPage />} />
      <Route path="/categories/create" element={<CreateCategoryPage />} />

      {/* Shops */}
      <Route path="/shops" element={<ShopListPage />} />
      <Route path="/shops/create" element={<CreateShopPage />} />

      {/* Items */}
      <Route path="/items" element={<ItemListPage />} />
      <Route path="/items/create" element={<CreateItemPage />} />
      <Route path="/items/:id/update" element={<UpdateItemPage />} />

      {/* Lists */}
      <Route path="/lists" element={<ListsPage />} />
      <Route path="/lists/create" element={<CreateListPage />} />
      <Route path="/lists/:id" element={<ListDetailsPage />} />
      <Route path="/lists/:id/update" element={<UpdateListPage />} />
      <Route path="/lists/:id/manage-items" element={<ManageItemsPage />} />
    </Routes>
  );
};

export default AllRoutes;
