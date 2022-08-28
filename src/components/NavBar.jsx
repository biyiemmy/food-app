import { Link } from "react-router-dom";
import Icon from "../icons/Vector.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="container my-3 text-white navbar d-flex align-item-center justify-content-between">
        <div className="d-flex justify-content-between">
          <img src={Icon} height="67px" width="57.48px" alt="" />
          <p className="px-3 navbar_text">Lilies</p>
        </div>
        <div>
          <ul className="d-flex align-item-center justify-content-between list-unstyled px-5">
            <div className="d-flex pt-1 mx-3 nav_link">
              <li>
                <Link className="nav_links" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav_links" to="/login">
                  Login
                </Link>
              </li>
            </div>
            <Link to="/register">
              <button class="btn my-1 btn-outline-success" type="register">
                Register
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
