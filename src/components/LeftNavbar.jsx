import { useEffect, useState } from "react";

const LeftNavbar = () => {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(" https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className=" mb-3 font-medium">All Category ({Categories.length}) </h2>
      <div className="flex flex-col gap-2">
        {Categories.map((category) => (
          <button className="btn" key={category.category_id}>
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;