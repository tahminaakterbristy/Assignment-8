
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar bg-base-500">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Book Vibe</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/listed-books" activeClassName="active">Listed Books</NavLink></li>
            <li><NavLink to="/pages-to-read" activeClassName="active">Pages to Read</NavLink></li>
          </ul>
        </div>
        <div className="flex-none">
          <button className="btn bg-blue-500 text-white">Sign In</button>
          <button className="btn bg-green-500 ml-2 text-white">Sign Up</button>
        </div>
      </div>
    );
};

export default Navbar;