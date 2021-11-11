import "./Table.css";

const Table = ({ children, separate = false }) => {
  return (
    <table
      data-testid="table"
      className={`table ${separate ? "table-separate" : ""}`}
      cellSpacing="0"
    >
      {children}
    </table>
  );
};

export default Table;
