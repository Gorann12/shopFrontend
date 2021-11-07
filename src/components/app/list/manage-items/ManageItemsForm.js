import { useState, useEffect } from "react";
import ItemCheckbox from "../../../ui/form/ItemCheckbox";
import CheckboxGroup from "../../../ui/form/CheckboxGroup";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";

const ManageItemsForm = ({ items, list, onSubmit }) => {
  const [selectedItems, setSelectedItems] = useState({});

  // Checkbox will emit {[item._id]: true/false} onChange
  useEffect(() => {
    const selectedItemsTemp = {};
    for (let item of list.items) {
      selectedItemsTemp[item._id] = true;
    }

    setSelectedItems(selectedItemsTemp);
  }, []);

  const isItemInList = (itemId) => {
    return selectedItems[itemId] !== undefined;
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    const items = [];
    for (let id in selectedItems) {
      if (selectedItems[id]) {
        items.push(id);
      }
    }

    // Database accepts {items: [id1, id2, id3...]}
    onSubmit({ items });
  };

  const changeHandler = (value) => {
    setSelectedItems((prevState) => ({ ...prevState, ...value }));
  };

  return (
    <form onSubmit={submitHandler}>
      <CheckboxGroup>
        {items.map((item) => (
          <ItemCheckbox
            key={item._id}
            value={item._id}
            item={item}
            checked={isItemInList(item._id)}
            onChange={changeHandler}
          />
        ))}
      </CheckboxGroup>
      <PrimaryButton position="center" separate={true}>
        Submit
      </PrimaryButton>
    </form>
  );
};

export default ManageItemsForm;
