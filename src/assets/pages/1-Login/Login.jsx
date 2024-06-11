import { Link, useNavigate } from "react-router-dom";
import Header from "../../../components/1-Header/Header";
import "./login.css";

import { useAuthContext } from "../../../context/AuthContext";
// import fetch from 'node-fetch'

 function Login() {
 const navigate = useNavigate()
 const { onProfile, setToken } = useAuthContext();
  async function handleLogin(national_id,password) {
    try {
      const response = await fetch("http://localhost:8000/api/tokens/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({national_id,password}),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const responseData = await response.json();
      sessionStorage.setItem("token", responseData.token);
            sessionStorage.setItem("parent",JSON.stringify(responseData.parent) );
            setToken(responseData.token)
onProfile(responseData.parent);
      // Redirect to the appropriate page after successful login
navigate("/profile");
      console.log(responseData);
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure, e.g., show error message to the user
    }
  }
const handleSubmit = (e) => {
e.preventDefault();
const national_id =e.target.national_id.value
const password = e.target.password.value
if (!national_id && !password) return null
handleLogin(national_id,password);
console.log(national_id,password)

}

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
                // type="email"
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
              <span className="forgot-password">
                <Link to="/Forget">Forgot Password ?</Link>
              </span>
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
