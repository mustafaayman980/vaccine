import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/image/33.png"

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-container ">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <div className="nav border">
            <ul>
              <li>
                <Link to="/" className="active" href="#home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Table" href="#Vaccination schedule">
                  Vaccination schedule
                </Link>
              </li>
              <li>
                <Link to="/CardTime">Vaccination time</Link>
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
