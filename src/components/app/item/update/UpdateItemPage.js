import { useState, useEffect } from "react";
import axios from "axios";
import UpdateItemHeader from "./UpdateItemHeader";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import ItemForm from "../shared/ItemForm";
import EmptyState from "../../../utils/EmptyState";
import { useHistory } from "react-router-dom";

const UpdateItemPage = ({ location }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const item = location.state;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();

    return () => {
      setCategories([]);
    };
  }, []);

  const updateItem = async (newItem) => {
    try {
      setIsLoading(true);
      await axios.patch(`/api/items/${item._id}`, newItem);

      history.push("/items/");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <>
      <UpdateItemHeader />
      {isLoading && <LoadingSpinner />}

      {/* Application will send item data when you click edit button,
          but if user typed url directly and that url wasn't cached
          location.state will be undefined. Also, if categories array
          is empty that means there is no items in database.
      */}
      {!isLoading && item && categories.length > 0 && (
        <ItemForm
          onSubmit={updateItem}
          defaultState={item}
          categories={categories}
        />
      )}

      {!isLoading && (!item || categories.length === 0) && (
        <EmptyState
          message="Something went wrong: you probably typed url"
          url={"/items"}
        />
      )}
    </>
  );
};

export default UpdateItemPage;
