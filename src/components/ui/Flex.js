import "./Flex.css";

const Flex = ({
  children,
  alignItems = "",
  justifyContent = "",
  separate = false,
  gap = false,
}) => {
  return (
    <div
      className={`flex ${alignItems} ${justifyContent} ${
        separate ? "flex-separate" : ""
      } ${gap ? "flex-gap-small" : ""}`}
    >
      {children}
    </div>
  );
};

export default Flex;
