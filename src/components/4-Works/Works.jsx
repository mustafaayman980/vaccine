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
            <h3>Vaccine</h3>
            <p>
              Vaccine is a platform that helps people to get vaccinated by the
              best vaccines in the world.
            </p>
          </div>
          <button type="button">View More</button>
        </div>
        <div className="card active">
          <div className="card-num">
            <span>02</span>
          </div>
          <div className="card-text">
            <h3>Vaccine</h3>
            <p>
              Vaccine is a platform that helps people to get vaccinated by the
              best vaccines in the world.
            </p>
          </div>
          <button type="button">View More</button>
        </div>
        <div className="card">
          <div className="card-num">
            <span>03</span>
          </div>
          <div className="card-text">
            <h3>Vaccine</h3>
            <p>
              Vaccine is a platform that helps people to get vaccinated by the
              best vaccines in the world.
            </p>
          </div>
          <button type="button">View More</button>
        </div>
      </div>
    </div>
  );
}
export default Works;
