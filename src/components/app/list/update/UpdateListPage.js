import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UpdateListHeader from "./UpdateListHeader";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import ListForm from "../shared/ListForm";
import EmptyState from "../../../utils/EmptyState";

const UpdateListPage = ({ location }) => {
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const list = location.state;

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get("/api/shops");
        setShops(response.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShops();

    return () => setShops([]);
  }, []);

  const updateList = async (newList) => {
    try {
      setIsLoading(true);
      await axios.patch(`/api/lists/${list._id}`, newList);
      history.push("/lists/");
    } catch (err) {
      setIsLoading(false);
      alert(err.response.data.message);
    }
  };

  return (
    <>
      <UpdateListHeader />
      {isLoading && <LoadingSpinner />}
      {!isLoading && list && shops.length && (
        <ListForm
          shops={shops}
          onSubmit={updateList}
          defaultState={list || {}}
        />
      )}
      {!isLoading && (!list || !shops.length) && (
        <EmptyState
          message="Something went wrong: You Probably Typed url"
          url="/lists"
        />
      )}
    </>
  );
};

export default UpdateListPage;
