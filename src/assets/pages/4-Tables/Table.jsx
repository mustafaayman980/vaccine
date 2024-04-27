import "./table.css";
import Header from "../../../components/1-Header/Header";
import { Link } from "react-router-dom";
import imageF from "/src/assets/image/5-removebg-preview.png"
import imageS from "/src/assets/image/10-removebg-preview.png";

function Table() {
  return (
    <div>
      <Header />
      <div className="tables">
        <div className="table">
          <div className="title">
            <h2>Children's vaccination schedule (1)</h2>
          </div>
          <div className="text">
            <p>At birth</p>
            <img src={imageF} alt="imageF" />
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
          </table>
        </div>
        <div className="table">
          <div className="text">
            <p>The second month of life(2)</p>
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
            <p>The second month of life(3)</p>
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
            <p>The second month of life(4)</p>
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
            <p>The second month of life(5)</p>
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
            <p>The second month of life(6)</p>
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
            <p>The second month of life(7)</p>
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
