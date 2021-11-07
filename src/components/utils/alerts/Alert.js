import { useEffect } from "react";
import "./Alert.css";

const Alert = ({ message, onDissapear, success }) => {
  useEffect(() => {
    setTimeout(() => {
      onDissapear();
    }, 3000);
  });
  return (
    <div className={`alert ${success ? "success" : "error"}`}>
      {/* String.fromCharCode will create checkmark (10003) or X (10005) html entity */}
      <div className="alert__checkmark">
        {String.fromCharCode(success ? 10003 : 10005)}
      </div>
      <p className="alert__text">Success: {message}</p>
    </div>
  );
};

export default Alert;
