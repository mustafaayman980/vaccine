
import { Link } from "react-router-dom";
import "./hero.css"
 function Hero() {
  return (
    <div>
      <div className="hero ">
        <div className="hero-text">
          <h5>We Provide All Health Care Solution</h5>
          <h2>Vaccinate your child. Protect them from 14 diseases.</h2>
          <Link to="/Intro">
            <button type="button">Read more</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="../src/assets/image/15.png" alt="vac" />
        </div>
      </div>
    </div>
  );
}
export default Hero