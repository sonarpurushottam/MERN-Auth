import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-slate-200 ">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to={"/"}>
            <h1 className="font-bold">Auth App</h1>
          </Link>
          <NavLink className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/SignIn">Sign In</Link>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
