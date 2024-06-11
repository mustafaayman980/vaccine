import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/image/W33.png";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";

function Header() {
  const { token } = useAuthContext();
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div>
      <div className="header">
        <div className="header-container ">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <span></span>
          <div className="nav border">
            <ul>
              <li>
                <Link
                  to="/"
                  className={activeLink === "/" ? "active" : null}
                  onClick={() => handleLinkClick("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Table"
                  className={activeLink === "/Table" ? "active" : null}
                  onClick={() => handleLinkClick("/Table")}
                >
                  Diseases
                </Link>
              </li>
              <li>
                <Link
                  to="/CardTime"
                  className={activeLink === "/CardTime" ? "active" : null}
                  onClick={() => handleLinkClick("/CardTime")}
                >
                  Vaccination time
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className={activeLink === "/profile" ? "active" :null}
                  onClick={() => handleLinkClick("/profile")}
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <span></span>

          {token ? (
            <Profile />
          ) : (
            <div className="btn">
              <Link to="/login">
                <button type="button" className="btn">
                  login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Header;
const Profile = () => {
  const { signOut } = useAuthContext();

  return (
    <Link to="/profile">
      <div>
        <Link to="/Login">
          <button type="button" onClick={signOut}>
            sing out
          </button>
        </Link>
      </div>
    </Link>
  );
};
