import { useHistory } from "react-router";
import Flag from "../../../ui/Flag";
import Flex from "../../../ui/Flex";
import EditIconButton from "../../../ui/buttons/EditIconButton";
import DeleteIconButton from "../../../ui/buttons/DeleteIconButton";

const ItemListElement = ({ item, onDelete }) => {
  const history = useHistory();

  const deleteHandler = () => {
    onDelete(item._id);
  };

  const navigateToUpdatePage = () => {
    history.push({
      pathname: `/items/${item._id}/update`,
      state: item,
    });
  };

  return (
    <tr>
      <td>
        <span>{item.name}</span>
        <br />
        <Flag>
          {item.quantity} item{item.quantity > 1 ? "s" : ""} left
        </Flag>
      </td>
      <td>{item.category.name}</td>
      <td>
        <Flex justifyContent="flex-end" gap={true}>
          <EditIconButton onClick={navigateToUpdatePage} />
          <DeleteIconButton onClick={deleteHandler} />
        </Flex>
      </td>
    </tr>
  );
};

export default ItemListElement;
