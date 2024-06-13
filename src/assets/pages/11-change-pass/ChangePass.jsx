import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/1-Header/Header";
import { useAuthContext } from "../../../context/AuthContext";
// import "./ChangePass.css"; // Assuming you have some CSS for styling

function ChangePass() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {token}= useAuthContext()
  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("New Password and Confirm Password do not match.");
      return;
    }
      if (!token) {
        setError("No token found. Please log in again.");
        return;
      }
try {
      const response = await axios.post(
        "http://localhost:8000/api/change-password",
        {
          current_password: oldPassword,
          new_password: newPassword,
          new_password_confirmation: confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess("Password changed successfully!");
      setError("");
      setTimeout(() => navigate("/profile"), 2000); // Redirect after 2 seconds
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError("Unauthorized. Please log in again.");
        } else {
          setError(
            `Failed to change password: ${
              error.response.data.message || error.response.statusText
            }`
          );
        }
      } else if (error.request) {
        setError("Failed to change password: No response from server.");
      } else {
        setError(`Failed to change password: ${error.message}`);
      }
      setSuccess("");
    }
  };

  return (
    <div>
      <Header />
      <div className="login">
        <h1>Change Password</h1>
        <div className="wave">
          <div className="container">
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <form className="form" onSubmit={handleChangePassword}>
              <input
                placeholder="Old Password"
                name="old_password"
                type="password"
                className="input"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
              <input
                placeholder="New Password"
                name="new_password"
                type="password"
                className="input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <input
                placeholder="Confirm Password"
                name="new_password_confirmation"
                type="password"
                className="input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <input
                value="Change Password"
                type="submit"
                className="login-button"
              />
            </form>
          </div>
          <div className="bt" style={{ margin: "80px" }}>
            <Link to="/profile">
              <button type="button">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePass;
