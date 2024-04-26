import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="text">
        <h2>@vaccination.com</h2>
      </div>
      <div></div>
      <div className="links">
        <ul>
            <li>
              <a href="##">Contact</a>
            </li>
            <li>
              <a href="##">help</a>
            </li>
            <li>
              <Link to="/Login">login</Link>
            </li>
           
          </ul>
        
      </div>
    </div>
  );
}
export default Footer;
