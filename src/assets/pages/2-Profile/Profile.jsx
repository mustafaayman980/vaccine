// import { Link } from "react-router-dom";
import "./profile.css";
import CardTime from "../3-Card-time/CardTime";
import Header from "../../../components/1-Header/Header";
import imageProfile from "/src/assets/image/profile1.png";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <Header />
      <div className="profile">
        <div className="cards">
          <div className="card-1">
            <div className="info">
              <h4>Baby Info</h4>
              <img src={imageProfile} alt="profile" />
            </div>

            <div>
              <form action={imageProfile} method="post">
                <input className="open" type="submit" value="open-image" />
              </form>
              <div className="labels">
                <form action="" method="post">
                  <label>
                    <span>Name:</span> Ali Mohamed Mahound
                  </label>
                  <label>
                    <span>Birthday:</span> 2/2/2024
                  </label>
                  <label>
                    <span>Gender:</span> Male
                  </label>
                  <label>
                    <span>National Id: </span>
                    30203021202788
                  </label>
                </form>
              </div>
            </div>
          </div>
          <CardTime />
          {/* <div className="card-2">
          <div>
            <img src="/src/assets/image/155.png" alt="profile" />
          </div>
        </div> */}
        </div>
        {/* <div className="bp">
        <Link to="/">
          <button type="button">back</button>
        </Link>
      </div> */}
      </div>
    </div>
  );
}
export default Profile;
