import { useEffect, useState } from "react";
import { getTopStories } from "../pages/api/scraper";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";

const TopStories = ({ brand, url, networkImage }) => {
  const [topStories, setTopStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const retrieveSiteInfo = async () => {
      const topStories = await getTopStories(url);
      setTopStories(topStories);
      setIsLoading(false);
    };

    retrieveSiteInfo();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl my-2">Top Stories from {brand}</h1>
        {isLoading && (
          <Skeleton style={{ margin: "2rem 0", width: "300px" }} count={10} />
        )}
        {topStories?.map((article, index) => (
          <Link
            key={`article-${index}`}
            href={{
              pathname: `/topStories/${brand}/${index + 1}`,
              query: {
                title: article.title,
                url: article.articleUrl,
                networkImage,
              },
            }}
          >
            <div
              key={`article-${index}`}
              className="items-center h-auto my-3 md:my-5 w-[326px] flex md:w-[40rem] border-slate-100 rounded-md border-[6px] shadow-md cursor-pointer hover:shadow-xl hover:border-slate-300"
            >
              <div className="hidden w-1/8 md:block flex justify-center items-center m-2">
                <img
                  className="m-2 md:rounded-full md:w-20 md:object-cover"
                  src={`${networkImage}`}
                />
              </div>
              <div className="w-7/8 py-4 ml-3 overflow-clip">
                <h1>{article.title}</h1>
                <span className="text-xs text-gray-500">
                  {article.articleUrl}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TopStories;
