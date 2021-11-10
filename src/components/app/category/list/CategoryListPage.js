import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import CategoryListHeader from "./CategoryListHeader";
import CategoryList from "./CategoryList";

const CategoryListPage = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const source = axios.CancelToken.source();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories", {
          cancelToken: source.token,
        });
        setCategories(response.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();

    return () => source.cancel();
  }, []);

  return (
    <>
      <CategoryListHeader />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <CategoryList categories={categories} />
      )}
    </>
  );
};

export default CategoryListPage;
