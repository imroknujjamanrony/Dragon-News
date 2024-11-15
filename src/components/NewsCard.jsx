import { AiOutlineEye, AiFillStar } from "react-icons/ai";

const NewsCard = ({ props = {} }) => {
  const { news } = props || {};
  const {
    author,
    published_date,
    title,
    details,
    image_url,
    rating,
    total_view,
  } = news;

  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="p-4 flex items-center space-x-4">
        <img src={author.img} alt="author" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-bold text-gray-800">{author.name}</p>
          <p className="text-sm text-gray-500">
            {new Date(published_date).toLocaleDateString()}
          </p>
        </div>
        <button className="ml-auto text-gray-500 hover:text-gray-700">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.84 4.61a5.5 5.5 0 01-.71 7.49L12 20.49l-8.13-8.37a5.5 5.5 0 017.75-7.75l1.38 1.38a5.5 5.5 0 017.74-.13z"
            />
          </svg>
        </button>
      </div>
      <img
        src={image_url}
        alt="card content"
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mt-2">
          {details.substring(0, 100)}...
        </p>
        <button className="text-blue-500 font-semibold mt-2">Read More</button>
      </div>
      <div className="p-4 flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center text-yellow-500">
          <AiFillStar className="mr-1" />
          <span className="font-bold">{rating.number}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <AiOutlineEye className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
