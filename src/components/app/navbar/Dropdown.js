import { NavLink } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({ title, options, baseUrl }) => {
  return (
    <div className="dropdown">
      <span className="dropdown__title">{title}</span>
      <ul className="dropdown__list">
        {options.map((option, index) => (
          <li className="dropdown__item" key={index}>
            <NavLink className="dropdown__link" to={baseUrl + option.endpoint}>
              {option.description}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
