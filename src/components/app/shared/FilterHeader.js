import Header from "../../ui/header/Header";
import Flex from "../../ui/Flex";

const FilterHeader = ({
  collection,
  onFilter,
  selected,
  headingValue = "",
}) => {
  const changeHandler = (evt) => {
    onFilter(evt.target.value);
  };

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" separate={true}>
        <Header>
          <h1>All {headingValue}</h1>
        </Header>
        <Flex alignItems="center" gap={true}>
          <label>Filter</label>
          <select onChange={changeHandler} defaultValue={selected}>
            <option value="">Select option</option>
            {collection.map((element) => (
              <option key={element} value={element}>
                {element}
              </option>
            ))}
          </select>
        </Flex>
      </Flex>
    </>
  );
};

export default FilterHeader;
