import Header from "../../../components/1-Header/Header";
import "./cardTime.css";
import { useEffect, useState } from "react";
function CardTime() {
  const CalculateTimeDifference = ({ time2 }) => {
    const [time1, setTime1] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime1(new Date());
      }, 1000); 

      return () => clearInterval(intervalId); 
    }, []);

    // Calculate the time difference between time1 and time2
    const difference = Math.abs(time2 - time1);

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    // const minutes = Math.floor(
    //   (difference % (1000 * 60 * 60)) / (1000 * 60)
    // );
    // const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return (
      <div className="totalCard">
        <div className="card-time">
          <img src="/src/assets/image/profile1.png" />

          <span className="text">
            <h3>Previous Vaccination-</h3>
            <div className="text-pra">{time1.toLocaleString()}</div>
          </span>

          <p>
            The time remaining for the next dose is:<span>{days} days</span> and
            <span> {hours} hours </span>
            {/* {minutes} minutes {seconds} seconds
          {seconds} seconds */}
          </p>
          <span className="text">
            <h3>Previous Vaccination-</h3>
            <div className="text-pra">{time2.toLocaleString()}</div>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="totalCard">
        <CalculateTimeDifference
          time1={new Date()} // Example time 1
          time2={new Date("2024-04-30T12:00:00")}
        />
      </div>
      
      </div>
    
  );
}

export default CardTime;