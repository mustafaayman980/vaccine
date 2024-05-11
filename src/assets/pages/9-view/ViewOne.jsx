import Header from "../../../components/1-Header/Header";
import imageProfile from "/src/assets/image/profile1.png";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import "./view.css";
function ViewOne() {
  const { token } = useAuthContext();
  console.log(token);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getChildren = async () => {
      try {
        fetch("http://localhost:8000/api/childrens", {
          method: "POST",
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
                        {children.doses.map((dose) => (
                          <>
                            <div className="card-vac">
                              <p className="vac">
                                <span>doses:</span> {dose.vaccine_name}
                              </p>
                              <p>
                                <span>doses_date:</span>
                                {dose.doses_date}
                              </p>
                            </div>
                          </>
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
