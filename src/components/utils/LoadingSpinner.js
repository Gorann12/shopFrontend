import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div
      data-testid="loading-spinner"
      aria-live="polite"
      aria-busy={true}
      className="loading-spinner"
    ></div>
  );
};

export default LoadingSpinner;
