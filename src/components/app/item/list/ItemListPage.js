import { useEffect, useState } from "react";
import axios from "axios";
import FilterHeader from "../../shared/FilterHeader";
import ItemList from "./ItemList";
import LoadingSpinner from "../../../utils/LoadingSpinner";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const ItemListPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("/api/items", {
          cancelToken: source.token,
        });
        setItems(response.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();

    return () => source.cancel();
  }, []);

  // Go through items and select unique categories
  const getCategories = () => {
    let categories = items.map((item) => item.category.name);
    return [...new Set(categories)];
  };

  const categoryFilterHandler = (category) => {
    setSelectedCategory(category);
  };

  // If selectedCategory has value "" then simply display all items
  // otherwise filter values to match selectedCategory
  const filterItemsByCategory = () => {
    if (!selectedCategory) return items;
    else return items.filter((item) => item.category.name === selectedCategory);
  };

  // Delete item from database and filter array to eliminate deleted item by id
  const deleteHandler = async (itemId) => {
    setIsLoading(true);
    try {
      await axios.delete(`/api/items/${itemId}`, { cancelToken: source.token });
      setItems((prevState) => prevState.filter((item) => item._id !== itemId));
    } catch (err) {
      console.log(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <FilterHeader
            selected={selectedCategory}
            onFilter={categoryFilterHandler}
            headingValue="Items"
            collection={getCategories()}
          />
          <ItemList onDelete={deleteHandler} items={filterItemsByCategory()} />
        </>
      )}
    </>
  );
};

export default ItemListPage;
