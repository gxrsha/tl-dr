import spinner from "../public/loading.gif";

const LoadingSpinner = () => {
  return (
    <div className="my-10">
      <img src={spinner.src} alt="loading..." />
    </div>
  );
};

export default LoadingSpinner;
