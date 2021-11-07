import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import CategoryListHeader from "./CategoryListHeader";
import CategoryList from "./CategoryList";

const ListCategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

export default ListCategoryPage;
