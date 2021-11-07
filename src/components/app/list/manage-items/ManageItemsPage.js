import { useState, useEffect } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import ManageItemsHeader from "./ManageItemsHeader";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import ManageItemsForm from "./ManageItemsForm";

const ManageItemsPage = ({ location }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const list = location.state;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("/api/items");
        setItems(response.data);
      } catch (err) {
        alert(err.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  const submitHandler = async (selectedItems) => {
    setIsLoading(true);

    try {
      await axios.patch(`/api/lists/${list._id}`, selectedItems);
      history.push(`/lists/${list._id}`);
    } catch (err) {
      alert(err.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* If user types url directly redirect him back to list details */}
      {!list && <Redirect to={`/lists/${id}`} />}
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <ManageItemsHeader listName={list.name} />
          <ManageItemsForm onSubmit={submitHandler} items={items} list={list} />
        </>
      )}
    </>
  );
};

export default ManageItemsPage;
