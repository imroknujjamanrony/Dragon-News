import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-4 items-center p-2 bg-gray-300">
      <p className="btn bg-green-600">latest news</p>
      <Marquee pauseOnHover={true} className="space-x-10">
        <Link to="/news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          nulla corrupti pariatur cupiditate debitis vel similique, molestias
          est rem soluta!
        </Link>
        <Link to="/news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          nulla corrupti pariatur cupiditate debitis vel similique, molestias
          est rem soluta!
        </Link>
        <Link to="/news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          nulla corrupti pariatur cupiditate debitis vel similique, molestias
          est rem soluta!
        </Link>
        <Link to="/news">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          nulla corrupti pariatur cupiditate debitis vel similique, molestias
          est rem soluta!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
