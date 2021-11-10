import { useState, useEffect } from "react";
import axios from "axios";
import CreateShopHeader from "./CreateShopHeader";
import CreateShopForm from "./CreateShopForm";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import Alert from "../../../utils/alerts/Alert";

const CreateShopPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alert, setAlert] = useState({ message: "", success: false });
  const source = axios.CancelToken.source();

  // To Prevent Memory Leaks when component unmounts
  useEffect(() => {
    return () => {
      source.cancel();
      setIsAlertShown(false);
    };
  }, []);

  const submitHandler = async (formValue) => {
    setIsLoading(true);
    try {
      await axios.post("/api/shops", formValue, { cancelToken: source.token });
      showSuccessAlert("Shop was successfully created!");
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
          onDissapear={() => setIsAlertShown(false)}
        />
      )}

      <CreateShopHeader />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <CreateShopForm onSubmit={submitHandler} />
      )}
    </>
  );
};

export default CreateShopPage;
