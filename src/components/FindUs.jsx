import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const FindUs = () => {
  return (
    <div className="join flex space-y-2 join-vertical *:bg-base-100">
      <button className="btn join-item justify-start">
        {" "}
        <FaFacebook /> Facebook
      </button>
      <button className="btn join-item justify-start">
        <FaInstagramSquare /> Instagram
      </button>
      <button className="btn join-item justify-start">
        <FaTwitter /> Twitter
      </button>
    </div>
  );
};

export default FindUs;
