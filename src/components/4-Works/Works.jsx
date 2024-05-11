import { Link } from "react-router-dom";
import "./works.css";

function Works() {
  return (
    <div className="work" id="services">
      <div className="text">
        <h3>Works</h3>
        <h2>How we works?</h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-num">
            <span>01</span>
          </div>
          <div className="card-text">
            <h3>Diseases</h3>
            <p>Diseases A Child Can Contract Without Vaccination</p>
          </div>
          <Link to="/Table">
            <button type="button">View More</button>
          </Link>
        </div>
        <div className="card active">
          <div className="card-num">
            <span>02</span>
          </div>
          <div className="card-text">
            <h3>Safety & Side effects</h3>
            <p>Learn about vaccine safety and side effects</p>
          </div>
          <Link to="/Safety">
            <button type="button">View More</button>
          </Link>
        </div>
        <div className="card">
          <div className="card-num">
            <span>03</span>
          </div>
          <div className="card-text">
            <h3>Benefits of Vaccines</h3>
            <p>Understand why vaccines are important</p>
          </div>

          <Link to="/Benefits">
            <button type="button">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Works;
