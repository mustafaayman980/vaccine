import { Link } from "react-router-dom";
import aboutF from "/src/assets/image/12.jpg" 
import aboutS from "/src/assets/image/14.jpg"; 
import aboutT from "/src/assets/image/13.jpg"; 

import "./about.css";
function About() {
  return (
    <div id="about">
      <div className="about">
        <div className="image">
          <div className="image-t">
            <img src={aboutF} alt="3" />
            <img src={aboutT} alt="4" />
          </div>
          <div className="image-t">
            <img src={aboutS} alt="4" />
            <img src={aboutF} alt="3" />
          </div>
        </div>
        <div className="text">
          <h3>About Us</h3>
          <h2>
            Vaccines are products that are usually given in childhood to protect
            against serious, often deadly diseases.
          </h2>
          <p>
            We provide advice and advice on vaccination and the high level of
            the best technology involved in our hospital.
          </p>
          <div className="same">
            <div className="s-pare">
              <p>Emergency Help</p>
              <p>Qualified Doctors</p>
            </div>
            <div className="s-pare">
              <p>Best Professionals</p>
              <p>Medical Treatment</p>
            </div>
          </div>
          <Link to="/Hospt">
            <button type="button">Read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default About;
