import NoDataSvg from "../../assets/NoData.svg";
import { Link } from "react-router-dom";
import "./EmptyState.css";

const EmptyState = ({ message = "", url = "" }) => {
  return (
    <div className="empty-state">
      <img className="empty-state__img" src={NoDataSvg} alt="No Data" />
      <p className="empty-state__message">{message}</p>
      {url && (
        <Link to={url} className="empty-state__link">
          You might want to go here
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
