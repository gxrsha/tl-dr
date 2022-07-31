import "react-loading-skeleton/dist/skeleton.css";
import { LoadingSpinner } from "../components";

const Summary = ({ title, url, networkImage, summaryText }) => {
  const navigateToUrl = (url) => {
    console.log("this is our url: ", url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-8 flex flex-col justify-center items-center">
      <div className="flex items-center px-8 mb-8">
        <img src={`${networkImage}`} className="w-20 h-20 object-cover" />
        <h1 className="ml-4 font-bold text-xl md:text-2xl">{title}</h1>
      </div>
      {!summaryText && <LoadingSpinner />}
      <div className="mb-10 flex justify-center">
        <p className="font-extralight font-sans mt-3 text-base px-8 md:w-1/2">
          {summaryText}
        </p>
      </div>
      <div className="flex md:justify-end md:w-1/2 px-12">
        {summaryText && (
          <button
            onClick={() => navigateToUrl(url)}
            className="rounded-full bg-slate-900 text-stone-100 py-[5px] px-[30px]"
          >
            Read More Here
          </button>
        )}
      </div>
    </div>
  );
};

export default Summary;
