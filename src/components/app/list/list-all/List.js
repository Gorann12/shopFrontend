import ListItem from "./ListItem";
import EmptyState from "../../../utils/EmptyState";
import Table from "../../../ui/table/Table";

const List = ({ lists, onDelete }) => {
  const deleteHandler = (listId) => {
    onDelete(listId);
  };

  return (
    <>
      {lists.length > 0 ? (
        <>
          <p>* Click on the list to see items</p>
          <Table>
            <tbody>
              {lists.map((list) => (
                <ListItem onDelete={deleteHandler} key={list._id} list={list} />
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <EmptyState message="You haven't creted any list" url="/lists/create" />
      )}
    </>
  );
};

export default List;
