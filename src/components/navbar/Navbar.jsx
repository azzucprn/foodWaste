import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import myContext from "../../../context/context";
import axios from "axios";

export default function Navbar({ isHome }) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(myContext);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/logout");
      setUser(!user);
      navigate("/");
    } catch (err) {
      console.log("error happened...", err);
    }
  };

  // console.log(isHome);
  return (
    <div>
      <div
        className="navbar-container"
        style={
          isHome
            ? { justifyContent: "flex-end" }
            : { justifyContent: "space-between" }
        }
      >
        {!isHome && (
          <p className="navbar-head">
            <Link to="/">
              <img
                src="src/assets/images/sublogo.jpg"
                className="header-logo"
                alt="LeftOver"
              />
            </Link>
          </p>
        )}
        <ul className="navbar-btn-list-cont">
          <li className="nav-btn-list-item">
            <Link className="nav-btn" to="/ourStory">
              Our Story
            </Link>
          </li>
          <li className="nav-btn-list-item">
            <Link className="nav-btn" to="/contactUs">
              Contact US
            </Link>
          </li>
          <li className="nav-btn-list-item">
            <div className="dropdown">
              <Link
                className="dropdown-toggle user-info-cont nav-btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User-Info
              </Link>
              <ul className="dropdown-menu">
                {!user && (
                  <div className="userAuthCont">
                    <li>
                      <Link className="dropdown-item fw-bold" to="/login">
                        Log In
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fw-bold" to="/register">
                        Sign Up
                      </Link>
                    </li>
                  </div>
                )}
                {user && (
                  <li>
                    <Link
                      className="dropdown-item fw-bold"
                      onClick={handleLogout}
                    >
                      LogOut
                    </Link>
                  </li>
                )}

                <li>
                  <Link className="dropdown-item fw-bold" to="/help">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        {/* Bread menu container */}
        <div className="bread-menu-cont">
          <i
            className="fa-solid fa-bars bread-menu"
            // onclick="togglePopup()"
          ></i>
          <div className="popup-cont" id="popup">
            <ul>
              <li className="popup-list-item">
                <a className="popup-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="popup-list-item">
                <a className="popup-link" href="OurStory.html">
                  Our Story
                </a>
              </li>
              <li className="popup-list-item">
                <a className="popup-link" href="Contact.html">
                  Contact
                </a>
              </li>
              <li>
                <a className="popup-link" href="login.html">
                  Log In
                </a>
              </li>
              <li>
                <a className="popup-link" href="register.html">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}