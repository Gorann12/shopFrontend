import { useState, useEffect } from "react";
import "./ItemCheckbox.css";

const ItemCheckbox = ({
  checked = false,
  onChange = () => {},
  item = { name: "", _id: "" },
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const changeHandler = (evt) => {
    setIsChecked((prevState) => !prevState);
    onChange({ [item._id]: evt.target.checked });
  };

  return (
    <div
      className={`item-checkbox ${isChecked ? "item-checkbox__active" : ""}`}
    >
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          value={item._id}
          onChange={changeHandler}
        />
        <span className="item-checkbox__fake"></span>
        <span className="item-checkbox__heading">{item.name}</span>
      </label>
    </div>
  );
};

export default ItemCheckbox;
