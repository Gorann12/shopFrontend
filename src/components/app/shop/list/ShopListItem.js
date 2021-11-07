const ShopListItem = ({ shop }) => {
  return (
    <tr>
      <td>{shop.name}</td>
      <td>{shop.address}</td>
      <td>{shop.city}</td>
    </tr>
  );
};

export default ShopListItem;
