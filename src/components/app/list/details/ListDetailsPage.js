import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import ListDetailsHeader from "./ListDetailsHeader";
import EmptyState from "../../../utils/EmptyState";
import ListDetailsItemList from "./ListDetailsItemList";

const ListDetailsPage = () => {
  const [list, setList] = useState({ items: [], _id: "" });
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const source = axios.CancelToken.source();

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(`/api/lists/${id}`, {
          cancelToken: source.token,
        });
        setList(response.data);
      } catch (err) {
        navigate("*");
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchList();

    return () => source.cancel();
  }, []);

  return (
    <>
      {isLoading ? <LoadingSpinner /> : <ListDetailsHeader list={list} />}
      {!isLoading && (
        <>
          {list.items.length ? (
            <ListDetailsItemList items={list.items} />
          ) : (
            <EmptyState message="No items here..." />
          )}
        </>
      )}
    </>
  );
};

export default ListDetailsPage;
