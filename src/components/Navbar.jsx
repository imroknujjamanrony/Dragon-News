import { Link } from "react-router-dom";
import loginIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="div"></div>
      <div className="nav space-x-8">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Carreer">Carreer</Link>
      </div>
      <div className="login flex gap-2">
        <img src={loginIcon} alt="" />
        <Link to="/login" className="btn btn-neutral">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
