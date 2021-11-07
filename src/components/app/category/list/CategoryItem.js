const CategoryItem = ({ category }) => {
  return (
    <tr>
      <td>{category.name}</td>
      <td>{category.description}</td>
    </tr>
  );
};

export default CategoryItem;
