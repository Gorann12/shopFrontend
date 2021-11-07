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

  // To Prevent Memory Leaks when component unmounts
  // Alert Component depends on timeout and to prevent timeout from running
  // after component unmounted useEffect return value is used
  useEffect(() => {
    return () => {
      setIsAlertShown(false);
    };
  }, []);

  const submitHandler = async (formValue) => {
    setIsLoading(true);
    try {
      await axios.post("/api/categories", formValue);
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
    // Loading will start when request is sent and will when server responds
    // Alerts will show after server has responded
    // Success alert will show if everything went fine with request and
    // otherwise Error alert will be shown, alert dissappears after 5 seconds
    <>
      {isAlertShown && (
        <Alert
          message={alert.message}
          success={alert.success}
          onDissapear={() => setIsAlertShown(false)}
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