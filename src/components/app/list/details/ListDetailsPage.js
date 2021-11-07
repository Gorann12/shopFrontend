import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import ListDetailsHeader from "./ListDetailsHeader";
import EmptyState from "../../../utils/EmptyState";
import ListDetailsItemList from "./ListDetailsItemList";

const ListDetailsPage = () => {
  const [list, setList] = useState({ items: [], _id: "" });
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(`/api/lists/${id}`);
        setList(response.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchList();

    return () => setList({});
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
