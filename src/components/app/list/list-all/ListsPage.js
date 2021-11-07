import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import FilterHeader from "../../shared/FilterHeader";
import List from "./List";

const ListsPage = () => {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedShop, setSelectedShop] = useState("");
  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get("/api/lists");
        setLists(response.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLists();

    return () => {
      setLists([]);
    };
  }, []);

  // Go through lists and select unique shops
  const getShops = () => {
    let shops = lists.map((list) => list.shop.name);
    return [...new Set(shops)];
  };

  const shopFilterHandler = (shop) => {
    setSelectedShop(shop);
  };

  // If selectedShop has value "" then simply display all lists
  // otherwise filter values to match selectedShop
  const filterListsByShop = () => {
    if (!selectedShop) return lists;
    else return lists.filter((list) => list.shop.name === selectedShop);
  };

  // Delete list from database and filter array to eliminate deleted list by id if
  // everything went fine
  const deleteHandler = async (listId) => {
    setIsLoading(true);
    try {
      await axios.delete(`/api/lists/${listId}`);
      setLists((prevState) => prevState.filter((list) => list._id !== listId));
    } catch (err) {
      console.log(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <FilterHeader
            selected={selectedShop}
            onFilter={shopFilterHandler}
            headingValue="Lists"
            collection={getShops()}
          />
          <List onDelete={deleteHandler} lists={filterListsByShop()} />
        </>
      )}
    </>
  );
};

export default ListsPage;
