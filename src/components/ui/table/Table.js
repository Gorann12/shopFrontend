import "./Table.css";

const Table = ({ children, separate }) => {
  return (
    <table
      className={`table ${separate ? "table-separate" : ""}`}
      cellSpacing="0"
    >
      {children}
    </table>
  );
};

export default Table;
