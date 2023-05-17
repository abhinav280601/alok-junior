import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "./images/EDYODA.png";
import { BsSearch } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} alt="Edyoda logo" />
        <div className="nav-left">
          <select>
            <option value="en">Courses</option>
          </select>
          <select>
            <option value="en">Programs</option>
          </select>
        </div>
      </Link>
      <ul className="nav-right">
        <div>
          <BsSearch />
        </div>
        <div>
          <CustomLink to="/pricing">Log in</CustomLink>
        </div>
        <div className="join">
          <CustomLink to="/about">JOIN NOW</CustomLink>
        </div>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
