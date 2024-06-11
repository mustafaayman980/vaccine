import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/image/final-logo.png";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";

function Header() {
  const { token } = useAuthContext();
  const [showModel, setShowModel] = useState(false);
  const [showSetting, setSetting] = useState(false);

  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div>
      <div className="header">
        <div className="header-container ">
          <button
            onClick={() => {
              setShowModel(true);
            }}
            className="menu icon-menu"
          ></button>
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <span></span>
          <div className="nav">
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
                  className={activeLink === "/profile" ? "active" : null}
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

          {showModel && (
            <div className="fixed">
              <ul className="model">
                <li className="mode">
                  <button
                    className="icon-close"
                    onClick={() => {
                      setShowModel(false);
                    }}
                  />
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Table">Diseases</Link>
                </li>
                <li>
                  <Link to="/CardTime">Vaccination time</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
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
    <div
      className="out"
      style={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Link to="/profile">
        <div>
          <Link to="/">
            <button type="button" onClick={signOut}>
              sing out
            </button>
          </Link>
        </div>
      </Link>
      <div
        // onClick={() => {
        //   // setSetting(true);
        // }}
        className="icon-settings"
        style={{
          fontSize: "25px",
          color: "rgb(25, 119, 204)",
          cursor: "pointer",
        }}
      ></div>
    </div>
  );
};
