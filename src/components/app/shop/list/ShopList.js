import EmptyState from "../../../utils/EmptyState";
import Table from "../../../ui/table/Table";
import ShopListItem from "./ShopListItem";

const ShopList = ({ shops }) => {
  return (
    <>
      {shops.length > 0 ? (
        <Table>
          <tbody>
            {shops.map((shop) => (
              <ShopListItem shop={shop} key={shop._id} />
            ))}
          </tbody>
        </Table>
      ) : (
        <EmptyState
          message="You haven't created any shop"
          url="/shops/create"
        />
      )}
    </>
  );
};

export default ShopList;
