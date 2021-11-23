import { useEffect, useState } from "react";
import axios from "axios";
import CreateItemHeader from "./CreateItemHeader";
import ItemForm from "../shared/ItemForm";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import EmptyState from "../../../utils/EmptyState";
import Alert from "../../../utils/alerts/Alert";

const CreateItemPage = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alert, setAlert] = useState({ message: "", success: false });
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

  const submitHandler = async (item) => {
    setIsLoading(true);
    try {
      await axios.post("/api/items", item, {
        cancelToken: source.token,
      });
      showSuccessAlert("Successfully created Item!");
    } catch (err) {
      console.log(err);
      showErrorAlert(err.response?.data.message);
    }
    setIsLoading(false);
    setIsAlertShown(true);
  };

  const showSuccessAlert = (message) => {
    setAlert(() => ({ message, success: true }));
  };

  const showErrorAlert = (message) => {
    setAlert(() => ({ message, success: false }));
  };

  return (
    <>
      {isAlertShown && (
        <Alert
          message={alert.message}
          success={alert.success}
          onTimeout={() => setIsAlertShown(false)}
        />
      )}
      <CreateItemHeader />
      {isLoading && <LoadingSpinner />}
      {!isLoading && categories.length > 0 && (
        <ItemForm onSubmit={submitHandler} categories={categories} />
      )}
      {!isLoading && categories.length === 0 && (
        <EmptyState
          message="You have to create category first"
          url="/categories/create"
        />
      )}
    </>
  );
};

export default CreateItemPage;
