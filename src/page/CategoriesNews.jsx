import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoriesNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <p className="text-gray-400">
        {news.length} News Found on This Categories
      </p>
      <div>
        {news.map((singleNews) => (
          <NewsCard key={singleNews.id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoriesNews;
