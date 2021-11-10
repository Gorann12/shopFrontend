import { useNavigate } from "react-router-dom";
import Header from "../../../ui/header/Header";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";
import Flex from "../../../ui/Flex";

const ListDetailsHeader = ({ list }) => {
  let navigate = useNavigate();

  const navigateToManageItemsPage = () => {
    navigate(`/lists/${list._id}/manage-items`, { state: list });
  };

  return (
    <Header separate={true}>
      <Flex alignItems="center" justifyContent="space-between">
        <h1>{list.name}'s items</h1>
        <PrimaryButton onClick={navigateToManageItemsPage}>
          Manage Items
        </PrimaryButton>
      </Flex>
    </Header>
  );
};

export default ListDetailsHeader;
