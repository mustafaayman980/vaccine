import "./about.css";
function About() {
  return (
    <div id="about">
      <div className="about">
        <div className="image">
          <div className="image-t">
            <img src="/src/assets/image/12.jpg" alt="3" />
            <img src="/src/assets/image/13.jpg" alt="4" />
          </div>
          <div className="image-t">
            <img src="/src/assets/image/14.jpg" alt="3" />
            <img src="/src/assets/image/12.jpg" alt="4" />
          </div>
        </div>
        <div className="text">
          <h3>About Us</h3>
          <h2>The Great Place Of Medical Hospital Center</h2>
          <p>
            We provide the special tips and advice’s of heath care treatment and
            high level of best technology involve in the our hospital.
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
          <button type="button">Read more</button>
        </div>
      </div>
    </div>
  );
}
export default About;
