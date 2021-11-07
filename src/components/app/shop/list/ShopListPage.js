import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import ShopList from "./ShopList";
import ShopListHeader from "./ShopListHeader";

const ShopListPage = () => {
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  }, []);

  return (
    <>
      <ShopListHeader />
      {isLoading ? <LoadingSpinner /> : <ShopList shops={shops} />}
    </>
  );
};

export default ShopListPage;
