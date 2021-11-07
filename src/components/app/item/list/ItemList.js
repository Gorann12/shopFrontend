import ItemListElement from "./ItemListElement";
import EmptyState from "../../../utils/EmptyState";
import Table from "../../../ui/table/Table";

const ItemList = ({ items, onDelete }) => {
  const deleteHandler = (itemId) => {
    onDelete(itemId);
  };

  return (
    <>
      {items.length > 0 ? (
        <Table separate={true}>
          <tbody>
            {items.map((item) => (
              <ItemListElement
                onDelete={deleteHandler}
                key={item._id}
                item={item}
              />
            ))}
          </tbody>
        </Table>
      ) : (
        <EmptyState
          message="You haven't created any item"
          url="/items/create"
        />
      )}
    </>
  );
};

export default ItemList;
