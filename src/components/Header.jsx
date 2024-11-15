import logo from "../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2">
      <div className="logo">
        <img className="w-[340px]" src={logo} alt="" />
      </div>
      <h2 className="text-gray-500 ">Journalism without fear or favour</h2>
      <p>{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
    </div>
  );
};

export default Header;