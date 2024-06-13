import Header from "../../../components/1-Header/Header";
import imageProfile from "/src/assets/image/profile1.png";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import "./view.css";

const generateColorFromDate = (date) => {
  // Convert the date to a string in YYYY-MM-DD format
  let dateStr = date.toISOString().slice(0, 10);

  // Create a hash of the date string
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Convert the hash to a hexadecimal color code
  let color = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2);
  }

  return color;
};


function ViewOne() {

   function isDatePast(dateString) {
     const today = new Date();
     const doseDate = new Date(dateString); // Assuming dateString is in a format parseable by Date constructor
     return doseDate < today;
   }
  const { token } = useAuthContext();
  console.log(token);
  const [data, setData] = useState([]);

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
      <div className="kids">
        <div className="profile">
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
                        <div>
                          <span>Name:</span>
                          {children?.name}
                        </div>
                        <div>
                          <span>gender: </span>
                          {children?.gender}
                        </div>

                        <div>
                          <span>dateOfbirth:</span> {children?.dateOfbirth}
                        </div>

                        <div>
                          <span>weight:</span> {children?.weight}
                        </div>

                        <div>
                          <span>length:</span> {children?.length}
                        </div>
                        <h3>Vaccination appointments</h3>

                        {children.doses.map((dose, index) => (
                          <div
                            key={index}
                            style={{ backgroundColor: generateColorFromDate (new Date(dose.doses_date)),padding:"10px 20px",borderRadius: "5px" }}

                          >
                            <ul>
                              <li
                                className={dose.doses_date ? "bg-defect" : ""}
                              >
                                <p className="vac">
                                  <span>doses:</span> {dose.vaccine_name}
                                </p>
                                <p>
                                  <span>doses_date:</span> {dose.doses_date}
                                </p>
                              </li>
                            </ul>
                          </div>
                        ))}
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
export default ViewOne;
