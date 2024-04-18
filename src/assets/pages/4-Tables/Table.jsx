import "./table.css";
import Header from "../../../components/1-Header/Header";
function Table() {
  return (
    <div className="tables">
      <Header />

      <div className="table">
        <div className="text">
          <h2>Children's vaccination schedule</h2>
          <p>At birth</p>
          <img src="/src/assets/image/10.jpg" />
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
          <p>The second month of life</p>
          <img src="/src/assets/image/10.jpg" />
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
    </div>
  );
}
export default Table;
