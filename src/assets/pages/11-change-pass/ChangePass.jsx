import { Link } from "react-router-dom";
import Header from "../../../components/1-Header/Header";


 function ChangePass() {
  return (
    <div>
      <Header />

      <div className="login">
        <h1>Change password</h1>
        <div className="wave">
          <div className="container">
            {/* <div className="heading">Sign In</div> */}

            <form className="form" action="" method="post">
              <input
                placeholder="old password"
                id="national_id"
                name="national_id"
                type="password"
                className="input"
                required={true}
              />
              <input
                placeholder="New Password"
                id="password"
                name="password"
                type="password"
                className="input"
                required={true}
              />
              <input
                placeholder="Confirm Password"
                id="password"
                name="password_confirmation"
                type="password"
                className="input"
                required={true}
              />

              <input
                value="change password"
                type="submit"
                className="login-button"
              />
            </form>
          </div>
          <div className="bt" style={{ margin: "80px" }}>
            <Link to="/Login">
              <button type="button">back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChangePass;