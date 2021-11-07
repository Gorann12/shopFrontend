import { useState } from "react";
import FormGroup from "../../../ui/form/FormGroup";
import FormControl from "../../../ui/form/FormControl";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";

const ListForm = ({
  onSubmit = () => {},
  shops,
  defaultState = { name: "", shop: shops[0] },
}) => {
  const [name, setName] = useState(defaultState.name);
  const [shop, setShop] = useState(defaultState.shop._id);

  const submitHandler = (evt) => {
    evt.preventDefault();

    onSubmit({ name, shop });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <FormGroup>
          <FormControl>
            <label>
              Name:
              <input
                type="text"
                maxLength="35"
                value={name}
                required={true}
                onChange={(evt) => setName(evt.target.value)}
              />
            </label>
          </FormControl>
          <FormControl>
            <label>Shop</label>
            <select value={shop} onChange={(evt) => setShop(evt.target.value)}>
              {shops.map((shop) => (
                <option key={shop._id} value={shop._id}>
                  {shop.name}
                </option>
              ))}
            </select>
          </FormControl>
        </FormGroup>
        <PrimaryButton position="center">Create</PrimaryButton>
      </form>
    </>
  );
};

export default ListForm;
