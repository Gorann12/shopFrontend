import Header from "../../../ui/header/Header";

const UpdateItemHeader = () => {
  return (
    <Header textAlign="center" separate={true}>
      <h1>Update Item</h1>
      <p>If update succeeds you will be redirected to item list</p>
    </Header>
  );
};

export default UpdateItemHeader;
