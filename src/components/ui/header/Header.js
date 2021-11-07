import "./Header.css";

const Header = ({ children, textAlign, separate }) => {
  return (
    <header className={`header ${textAlign} ${separate ? "separate" : ""}`}>
      {children}
    </header>
  );
};

export default Header;
