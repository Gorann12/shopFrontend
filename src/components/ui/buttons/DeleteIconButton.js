import { FaTrash } from "react-icons/fa";
import "./IconButton.css";

const DeleteIconButton = ({ onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Edit"
      className="icon-button icon-button__delete"
    >
      <FaTrash style={{ color: "#b41e1e" }} />
    </button>
  );
};

export default DeleteIconButton;
