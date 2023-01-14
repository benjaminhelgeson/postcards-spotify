import { Outlet, Link } from "react-router-dom";

const MenuDisplay = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/error">Error</Link>
          </li>
          <li>
            <Link to="/success">Success</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default MenuDisplay;