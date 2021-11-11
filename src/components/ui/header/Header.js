import "./Header.css";

const Header = ({ children, textAlign = "left", separate = false }) => {
  return (
    <header className={`header ${textAlign} ${separate ? "separate" : ""}`}>
      {children}
    </header>
  );
};

export default Header;
