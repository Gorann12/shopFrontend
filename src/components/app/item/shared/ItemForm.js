import { useState } from "react";
import FormControl from "../../../ui/form/FormControl";
import FormGroup from "../../../ui/form/FormGroup";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";

// If this form is used for creating then it wouldn't receive defaultState
// and that's why defaultState has defaultObject value.
// If it is used for updating it will receive defaultState (an item that is being updated)
const ItemForm = ({
  categories,
  onSubmit,
  defaultState = { name: "", category: categories[0], quantity: 1 },
}) => {
  const [name, setName] = useState(defaultState.name);
  const [category, setCategory] = useState(defaultState.category._id);
  const [quantity, setQuantity] = useState(defaultState.quantity);

  const submitHandler = (evt) => {
    evt.preventDefault();
    onSubmit({ name, category, quantity });
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl>
        <label>
          Name
          <input
            type="text"
            maxLength="25"
            required={true}
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        </label>
      </FormControl>
      <FormGroup>
        <FormControl>
          <label>Category</label>
          <select
            value={category}
            onChange={(evt) => setCategory(evt.target.value)}
          >
            {categories.map((category) => (
              <option value={category._id} key={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </FormControl>
        <FormControl>
          <label>
            Quantity
            <input
              type="number"
              min="1"
              required={true}
              value={quantity}
              onChange={(evt) => setQuantity(evt.target.value)}
            />
          </label>
        </FormControl>
      </FormGroup>
      <PrimaryButton position="center">Submit</PrimaryButton>
    </form>
  );
};

export default ItemForm;
