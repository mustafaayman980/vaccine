import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../assets/image/final-logo.png";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import axios from "axios";


function Header() {
  const { token } = useAuthContext();
  const [showModel, setShowModel] = useState(false);

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
          {token && (
            <div className="nav">
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Table"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Diseases
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/CardTime"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Vaccination time
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Profile
                  </NavLink>
                </li>
              </ul>
            </div>
          )}

          <span></span>
          <Profile />
          

          {showModel && (
            <div className="fixed">
              <ul className="model">
                <li className="mode">
                  <button
                    className="icon-close1"
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
  const [Setting, setSetting] = useState(false);
 
  const { token, setToken } = useAuthContext();
const navigate = useNavigate()
  async function handleLogOut() {
    await axios.post("http://localhost:8000/api/logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setToken(null);
  
    sessionStorage.removeItem("token");
   navigate('/login',{replace:
    true
   })

  }

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
      {token ? (
        <div>
          <div className="total-setting">
            <div className="btn">
              <button type="button" className="btn-1" onClick={handleLogOut}>
                logout
              </button>
              <div className="icon-info">
                <div
                  onClick={() => {
                    setSetting(!Setting);
                  }}
                  className="icon-settings"
                >
                  {Setting && (
                    <div className="setting">
                      <div className="setting-info">
                        <ul>
                          <li>
                            <div
                              className="icon-close1"
                              onClick={() => {
                                setSetting(false);
                              }}
                            ></div>
                          </li>
                          <li>
                            <Link to="/ChangePass">ChangePass?</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Link to="/login">
          <button type="button" className="btn">
            login
          </button>
        </Link>
      )}
    </div>
  );
};
