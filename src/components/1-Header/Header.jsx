import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-container ">
          <Link to="/">
            <div className="logo">
              <img src="/src/assets/image/logo.png" alt="logo" />
            </div>
          </Link>
          <div className="nav border">
            <ul>
              <li>
                <a className="active" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          <span></span>

          <div className="search">
            <input type="search" placeholder="search" />
          </div>
          <div className="btn">
            <Link to="/login">
              <button type="button" className="btn">
                login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
