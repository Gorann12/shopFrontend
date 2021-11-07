import Table from "../../../ui/table/Table";

const ListDetailsItemList = ({ items }) => {
  return (
    <Table>
      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListDetailsItemList;
