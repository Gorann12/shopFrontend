import { useState, useEffect } from "react";
import {
  useParams,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import ManageItemsHeader from "./ManageItemsHeader";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import ManageItemsForm from "./ManageItemsForm";

const ManageItemsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
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
      navigate(`/lists/${list._id}`);
    } catch (err) {
      alert(err.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* If user types url directly redirect him back to list details */}
      {!list && <Navigate to={`/lists/${id}`} />}
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
