import "./table.css";
import Header from "../../../components/1-Header/Header";
import { Link } from "react-router-dom";
import imageF from "/src/assets/image/5-removebg-preview.png"
import imageS from "/src/assets/image/10-removebg-preview.png";

function Table() {
  const items = [
    { title: "Polio", sub: "Causes permanent paralysis or death." },
    {
      title: "Measles",
      sub: " Leads to rash, cough, fever, and sometimes serious complications  ",
    },
    {
      title: "Tetanus",
      sub: "Causes painful muscle stiffness, lockjaw, and can be fatal.",
    },
    {
      title: "Whooping Cough",
      sub: "Brings on severe coughing fits, trouble breathing, and pneumonia",
    },
    {
      title: "Bacterial Pneumonia",
      sub: "Makes breathing difficult, causes chest pain, and fever.",
    },
    {
      title: "Bacterial Meningitis",
      sub: " Leads to fever, headache, stiff neck, and can cause brain damage or death.",
    },
    {
      title: "Hepatitis B ",
      sub: " Damages the liver and can lead to liver cancer.",
    },
    {
      title: "RSV (Respiratory Syncytial Virus) ",
      sub: " Causes respiratory infections and can lead to pneumonia.",
    },
    {
      title: "Hib (Haemophilus influenzae type b) ",
      sub: " Leads to infections in the ear, sinuses, lungs, and bloodstream.",
    },
    {
      title: "Rotavirus ",
      sub: "Causes diarrhea and vomiting, and can lead to dehydration.",
    },
  ];
  return (
    <div>
      <Header />
      <div className="tables">
        <div className="table">
          <div className="title">
            <h2>Diseases a Child Can Contract Without Vaccination</h2>
          </div>
          {items.map((item,index) => (
            <div className="text" key={item.id}>
              <div className="para">
                <h3>{index}-{item.title}:</h3>
                <p>{item.sub}</p>
              </div>
              <img src={imageF} alt="imageF" />
            </div>
          ))}

          {/* <table>
            <thead>
              <tr>
                <th>Age</th>
                <th>Dose</th>
                <th>Taste</th>
                <th>Disease</th>
                <th>Dose</th>
                <th>Vaccination method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The first 24 hours</td>
                <td>Birth</td>
                <td>Infant B liver</td>
                <td>Viral hepatitis B</td>
                <td>.5C</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Jane</td>
                <td>25</td>
                <td>Female</td>
                <td>Male</td>
                <td>Male</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Jane</td>
                <td>25</td>
                <td>Female</td>
                <td>Male</td>
                <td>Male</td>
                <td>Male</td>
              </tr>
            </tbody>
          </table> */}
        </div>
        {/* <div className="table">
          <div className="text">
            <p>Measles:</p>
            <img src={imageS} alt="imageS" />
          </div>
          <table>
            <thead>
              <tr>
                <th>Age</th>
                <th>Dose</th>
                <th>Taste</th>
                <th>Disease</th>
                <th>Dose</th>
                <th>Vaccination method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={3}>The first 24 hours</td>
                <td rowSpan={3}>Birth</td>
                <td>Infant B liver</td>
                <td>Viral hepatitis B</td>
                <td>.5C</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Female</td>
                <td>Male</td>
                <td>Male</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Female</td>
                <td>Male</td>
                <td>Male</td>
                <td>Male</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table">
          <div className="text">
            <p>Tetanus:</p>
            <img src={imageS} alt="imageS" />
          </div>
          <table>
            <thead>
              <tr>
                <th>Age</th>
                <th>Dose</th>
                <th>Taste</th>
                <th>Disease</th>
                <th>Dose</th>
                <th>Vaccination method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={3}>The first 24 hours</td>
                <td rowSpan={3}>Birth</td>
                <td>Infant B liver</td>
                <td>Viral hepatitis B</td>
                <td>.5C</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Female</td>
                <td>Male</td>
                <td>Male</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Female</td>
                <td>Male</td>
                <td>Male</td>
                <td>Male</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table">
          <div className="text">
            <p>Whooping Cough:</p>
            <img src={imageS} alt="imageS" />
          </div>
          <table>
            <thead>
              <tr>
                <th>Age</th>
                <th>Dose</th>
                <th>Taste</th>
                <th>Disease</th>
                <th>Dose</th>
                <th>Vaccination method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={3}>The first 24 hours</td>
                <td rowSpan={3}>Birth</td>
                <td>Infant B liver</td>
                <td>Viral hepatitis B</td>
                <td>.5C</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Female</td>
                <td>Male</td>
                <td>Male</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Female</td>
                <td>Male</td>
                <td>Male</td>
                <td>Male</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table">
          <div className="text">
            <p>Bacterial Pneumonia:</p>
            <img src={imageS} alt="imageS" />
          </div>
          <table>
            <thead>
              <tr>
                <th>Age</th>
                <th>Dose</th>
                <th>Taste</th>
                <th>Disease</th>
                <th>Dose</th>
                <th>Vaccination method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The first 24 hours</td>
                <td>Birth</td>
                <td>Infant B liver</td>
                <td>Viral hepatitis B</td>
                <td>.5C</td>
                <td>Male</td>
              </tr>
              <tr>
                <td colSpan={6}></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table">
          <div className="text">
            <p>Bacterial Meningitis:(6)</p>
            <img src={imageS} alt="imageS" />
          </div>
          <table>
            <thead>
              <tr>
                <th>Age</th>
                <th>Dose</th>
                <th>Taste</th>
                <th>Disease</th>
                <th>Dose</th>
                <th>Vaccination method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>The first 24 hours</td>
                <td rowSpan={2}>Birth</td>
                <td>Infant B liver</td>
                <td>Viral hepatitis B</td>
                <td>.5C</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Jane</td>
                <td>25</td>
                <td>Female</td>
                <td>Male</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table">
          <div className="text">
            <p>Hepatitis B:(7)</p>
            <img src={imageS} alt="imageS" />
          </div>
          <table>
            <thead>
              <tr>
                <th>Age</th>
                <th>Dose</th>
                <th>Taste</th>
                <th>Disease</th>
                <th>Dose</th>
                <th>Vaccination method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={3}>The first 24 hours</td>
                <td rowSpan={3}>Birth</td>
                <td>Infant B liver</td>
                <td>Viral hepatitis B</td>
                <td>.5C</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Female</td>
                <td>Male</td>
                <td>Male</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Female</td>
                <td>Male</td>
                <td>Male</td>
                <td>Male</td>
              </tr>
            </tbody>
          </table>
        </div> */}
        <div className="bp">
          <Link to="/">
            <button type="button">back</button>
          </Link>
        </div>
        <div className="title">
          <h2>thank you </h2>
        </div>
      </div>
    </div>
  );
}
export default Table;
