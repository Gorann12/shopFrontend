import Dropdown from "./Dropdown";

import DivContainer from "../../ui/containers/DivContainer";
import Flex from "../../ui/Flex";
import "./Nav.css";

const Nav = () => {
  const dropdownItems = [
    { title: "Category", baseUrl: "/categories" },
    { title: "Shop", baseUrl: "/shops" },
    { title: "Item", baseUrl: "/items" },
    { title: "List", baseUrl: "/lists" },
  ];
  const dropdownActions = [
    { description: "Create", endpoint: "/create" },
    { description: "List All", endpoint: "/" },
  ];

  return (
    <nav>
      <DivContainer>
        <Flex alignItems="center" justifyContent="space-between">
          {/* Title will be initially visible, actions will be shown when dropdown becomes active
              and dropdownActions will become links with baseUrl + endpoint
              for example /categories/create...
           */}
          {dropdownItems.map((dropdownItem, index) => (
            <Dropdown
              key={index}
              title={dropdownItem.title}
              options={dropdownActions}
              baseUrl={dropdownItem.baseUrl}
            />
          ))}
        </Flex>
      </DivContainer>
    </nav>
  );
};

export default Nav;
