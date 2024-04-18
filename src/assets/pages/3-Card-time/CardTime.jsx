import Header from "../../../components/1-Header/Header";
import "./cardTime.css";
function CardTime() {
  return (
    <div>
      <Header />
      <div className="totalCard">
        <div className="card-time">
          <img src="/src/assets/image/profile1.png" />
          <div className="text">
            <h3>Previous Vaccination-</h3>
            <div className="text-pra">
              <span className="st">name vaccin</span>
              <div className="card-info">
                <span>18th of jan</span>
                <span>11: Am</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-time">
          <img src="/src/assets/image/profile1.png" />
          <div className="text">
            <h3>Next Vaccination-</h3>
            <div className="text-pra">
              <span className="st">name vaccin</span>
              <div className="card-info">
                <span>18th of jan</span>
                <span>11: Am</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTime;
