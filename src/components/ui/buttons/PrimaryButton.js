import "./PrimaryButton.css";

const PrimaryButton = ({
  children,
  onClick = () => {},
  position,
  separate,
}) => {
  return (
    <button
      className={`button-primary button-${position} ${
        separate ? "button-separate" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
