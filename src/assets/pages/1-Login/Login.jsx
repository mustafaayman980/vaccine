import { Link, useNavigate } from "react-router-dom";
import Header from "../../../components/1-Header/Header";
import "./login.css";

import { useAuthContext } from "../../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { onProfile, setToken } = useAuthContext();
  async function handleLogin(national_id, password) {
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ national_id, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const responseData = await response.json();
      sessionStorage.setItem("token", responseData.token);
      sessionStorage.setItem("parent", JSON.stringify(responseData.parent));
      setToken(responseData.token);
      onProfile(responseData.parent);

      navigate("/profile", { replace: true });
      console.log(responseData);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const national_id = e.target.national_id.value;
    const password = e.target.password.value;
    if (!national_id && !password) return null;
    handleLogin(national_id, password);
    navigate("/profile", { replace: true });
  };

  return (
    <div>
      <Header />

      <div className="login">
        <h1>login....</h1>
        <div className="wave">
          <div className="container">
            <div className="heading">Sign In</div>

            <form className="form" onSubmit={handleSubmit}>
              <input
                placeholder="national_id"
                id="national_id"
                name="national_id"
                className="input"
                required={true}
              />
              <input
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                className="input"
                required={true}
              />

              <input value="Sign In" type="submit" className="login-button" />
            </form>
          </div>
          <div className="bt">
            <Link to="/">
              <button type="button">back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
