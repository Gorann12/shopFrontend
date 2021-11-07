import "./SecondaryButton.css";

const SecondaryButton = ({ onClick = () => {}, children }) => {
  return (
    <button className="button-secondary" onClick={onClick}>
      {children}
    </button>
  );
};

export default SecondaryButton;
