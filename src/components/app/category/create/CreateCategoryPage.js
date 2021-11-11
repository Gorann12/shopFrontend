import { useState, useEffect } from "react";
import axios from "axios";
import CreateCategoryHeader from "./CreateCategoryHeader";
import CreateCategoryForm from "./CreateCategoryForm";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import Alert from "../../../utils/alerts/Alert";

const CreateCategoryPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alert, setAlert] = useState({ message: "", success: false });
  const source = axios.CancelToken.source();

  // To Prevent Memory Leaks when component unmounts, unfinished request will be canceled
  useEffect(() => {
    return () => source.cancel();
  }, []);

  const submitHandler = async (formValue) => {
    setIsLoading(true);
    try {
      await axios.post("/api/categories", formValue, {
        cancelToken: source.token,
      });
      showSuccessAlert("Successfully created category!");
    } catch (err) {
      showErrorAlert(err.response.data.message);
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
      <CreateCategoryHeader />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <CreateCategoryForm onSubmit={submitHandler} />
      )}
    </>
  );
};

export default CreateCategoryPage;
