// import { Link } from "react-router-dom";
import "./profile.css";
import CardTime from "../3-Card-time/CardTime";
import Header from "../../../components/1-Header/Header";

function Profile() {
  return (
    <div className="profile">
      <Header />

      <div className="cards">
        <div className="card-1">
          <div className="info">
            <h4>Baby Info</h4>
            <img src="/src/assets/image/profile1.png" alt="profile" />
          </div>

          <div>
            <form action="/src/assets/image/profile.png" method="post">
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
        {/* <div className="card-2">
          <div>
            <img src="/src/assets/image/155.png" alt="profile" />
          </div>
        </div> */}
        <CardTime />
      </div>
      {/* <div className="bp">
        <Link to="/">
          <button type="button">back</button>
        </Link>
      </div> */}
    </div>
  );
}
export default Profile;
