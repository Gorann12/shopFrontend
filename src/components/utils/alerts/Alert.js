import { useEffect } from "react";
import "./Alert.css";

const Alert = ({ message = "", onTimeout = () => {}, success = true }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onTimeout();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`alert ${success ? "success" : "error"}`} role="alert">
      {/* String.fromCharCode will create checkmark (10003) or X (10005) html entity */}
      <div className="alert__checkmark">
        {String.fromCharCode(success ? 10003 : 10005)}
      </div>
      <p className="alert__text">Success: {message}</p>
    </div>
  );
};

export default Alert;
