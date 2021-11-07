import { useState } from "react";
import FormControl from "../../../ui/form/FormControl";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";

const CreateShopForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const submitHandler = (evt) => {
    evt.preventDefault();

    onSubmit({ name, address, city });
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl>
        <label>
          Name
          <input
            type="text"
            required={true}
            name="testControl"
            maxLength="25"
            onChange={(evt) => setName(evt.target.value)}
          />
        </label>
      </FormControl>
      <FormControl>
        <label>
          Address
          <input
            type="text"
            required={true}
            maxLength="30"
            onChange={(evt) => setAddress(evt.target.value)}
          />
        </label>
      </FormControl>
      <FormControl>
        <label>
          City
          <input
            type="text"
            required={true}
            maxLength="100"
            onChange={(evt) => setCity(evt.target.value)}
          />
        </label>
      </FormControl>
      <PrimaryButton position="center">Submit</PrimaryButton>
    </form>
  );
};

export default CreateShopForm;
