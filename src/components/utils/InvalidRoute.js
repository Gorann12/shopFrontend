import "./InvalidRoute.css";
import { Link } from "react-router-dom";
import PageNotFound from "../../assets/PageNotFound.svg";

const InvalidRoute = () => {
  return (
    <>
      <img
        className="invalid-route__img"
        src={PageNotFound}
        alt="Invalid Route (Route not found)"
      />
      <p className="invalid-route__description">
        <span className="invalid-route__text">Route not found</span>
        <Link className="invalid-route__link" to="/">
          Go To Beginning
        </Link>
      </p>
    </>
  );
};

export default InvalidRoute;
