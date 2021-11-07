import { useNavigate } from "react-router-dom";
import Flex from "../../../ui/Flex";
import Flag from "../../../ui/Flag";
import EditIconButton from "../../../ui/buttons/EditIconButton";
import DeleteIconButton from "../../../ui/buttons/DeleteIconButton";

const ListItem = ({ list, onDelete }) => {
  const navigate = useNavigate();

  const deleteHandler = (evt) => {
    evt.stopPropagation();

    onDelete(list._id);
  };

  // Stop propagation will prevent tr from getting the click event
  const navigateToUpdatePage = (evt) => {
    evt.stopPropagation();

    navigate(`/lists/${list._id}/update`, { state: list });
    // history.push({
    //   pathname: `/lists/${list._id}/update`,
    //   state: list,
    // });
  };

  const navigateToListDetailsPage = (evt) => {
    evt.stopPropagation();

    navigate(`/lists/${list._id}`);
    // history.push(`/lists/${list._id}`);
  };

  return (
    <tr onClick={navigateToListDetailsPage} tabIndex="0" role="link">
      <td>
        <span>{list.name}</span>
        <br />
        <Flag>{list.items.length} items</Flag>
      </td>
      <td>{list.shop.name}</td>
      <td>
        <Flex justifyContent="flex-end" gap={true}>
          <EditIconButton onClick={navigateToUpdatePage} />
          <DeleteIconButton onClick={deleteHandler} />
        </Flex>
      </td>
    </tr>
  );
};

export default ListItem;
