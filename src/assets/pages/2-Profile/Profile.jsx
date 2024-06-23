
import "./profile.css";

import Header from "../../../components/1-Header/Header";
import imageProfile from "/src/assets/image/profile1.png";
import { useAuthContext } from "../../../context/AuthContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const { profile } = useAuthContext();
  const { token } = useAuthContext();
  console.log(token);
  const [data, setData] = useState([]);

  console.log(profile);
  useEffect(() => {
    const getChildren = async () => {
      try {
        fetch("http://localhost:8000/api/childrens", {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((res) => setData(res));
      } catch (error) {
        console.log(error);
      }
    };
    getChildren();
  }, [token]);

  return (
    <div>
      <Header />
      <div className="profile">
        <div className="cards">
          <div className="card-1">
            <div className="info">
              <h4>parent</h4>
              <img src={imageProfile} alt="profile" />
            </div>
            <div>
              <div className="labels">
                <form action="" method="post">
                  <label>
                    <span>Name:</span>
                    {profile?.name}
                  </label>
                  <label>
                    <span>National Id: </span>
                    {profile?.national_id}
                  </label>
                  <label>
                    <span>phone_number:</span> {profile?.phone_number}
                  </label>
                  <label>
                    <span>address:</span> {profile?.national_id}
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div className="kids-info">
            <div className="info">
              <h4>for kids</h4>
              <img src={imageProfile} alt="profile" />
            </div>
            <div className="card-1">
              <div className="labels">
                {data.length > 0 &&
                  data.map((children) => (
                    <>
                      <form action="" method="post">
                        <label>
                          <span>Name:</span>
                          {children?.name}
                        </label>
                        <label>
                          <span>gender: </span>
                          {children?.gender}
                        </label>
                        <label>
                          <span>dateOfbirth:</span> {children?.dateOfbirth}
                        </label>

                        <Link to="/ViewOne">
                          <button type="button">View</button>
                        </Link>
                      </form>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
