import { FaEdit } from "react-icons/fa";
import "./IconButton.css";

const EditIconButton = ({ onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Edit"
      className="icon-button icon-button__edit"
    >
      <FaEdit />
    </button>
  );
};

export default EditIconButton;
