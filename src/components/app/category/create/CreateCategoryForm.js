import { useState } from "react";
import FormControl from "../../../ui/form/FormControl";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";

const CreateCategoryForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (evt) => {
    evt.preventDefault();

    onSubmit({ name, description });
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          required={true}
          maxLength="25"
          onChange={(evt) => setName(evt.target.value)}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          onChange={(evt) => setDescription(evt.target.value)}
        ></textarea>
      </FormControl>
      <PrimaryButton position="center">Create</PrimaryButton>
    </form>
  );
};

export default CreateCategoryForm;
