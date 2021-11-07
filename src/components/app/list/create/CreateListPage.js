import { useState, useEffect } from "react";
import axios from "axios";
import CreateListHeader from "./CreateListHeader";
import ListForm from "../shared/ListForm";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import EmptyState from "../../../utils/EmptyState";
import Alert from "../../../utils/alerts/Alert";

const CreateListPage = () => {
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alert, setAlert] = useState({ message: "", success: false });

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

    return () => {
      setIsAlertShown(false);
    };
  }, []);

  const submitHandler = async (list) => {
    setIsLoading(true);
    try {
      await axios.post("/api/lists", list);
      showSuccessAlert("Successfully created list!");
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
      <CreateListHeader />
      {isLoading && <LoadingSpinner />}
      {!isLoading && shops.length > 0 && (
        <ListForm onSubmit={submitHandler} shops={shops} />
      )}
      {!isLoading && shops.length === 0 && (
        <EmptyState
          message="You have to create shop first"
          url="/shops/create"
        />
      )}
    </>
  );
};

export default CreateListPage;
