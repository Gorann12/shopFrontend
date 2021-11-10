import { FaRegCaretSquareLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../../ui/buttons/SecondaryButton";
import Header from "../../../ui/header/Header";
import Flex from "../../../ui/Flex";

const ManageItemsHeader = ({ listName = "" }) => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <Header separate={true}>
      <SecondaryButton onClick={navigateBack}>
        <Flex alignItems="center" gap={true}>
          <FaRegCaretSquareLeft />
          <span>Go Back</span>
        </Flex>
      </SecondaryButton>
      <h1>Manage {listName ? `${listName}'s` : listName} items</h1>
      <p>You will be redirected if everything goes well</p>
    </Header>
  );
};

export default ManageItemsHeader;
