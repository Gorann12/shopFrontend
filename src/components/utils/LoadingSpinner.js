import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return <div role="alert" aria-busy={true} className="loading-spinner"></div>;
};

export default LoadingSpinner;
