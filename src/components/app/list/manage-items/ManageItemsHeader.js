import Header from "../../../ui/header/Header";

const ManageItemsHeader = ({ listName = "" }) => {
  return (
    // If listName prop isn't provided we will output: Manage items
    <Header separate={true}>
      <h1>Manage {listName ? `${listName}'s` : listName} items</h1>
      <p>You will be redirected if everything goes well</p>
    </Header>
  );
};

export default ManageItemsHeader;
