import "./table.css";
import Header from "../../../components/1-Header/Header";
import { Link } from "react-router-dom";
import image1 from "/src/assets/image/00000.png";
import image2 from "/src/assets/image/1111.png";
import image3 from "/src/assets/image/2222.png";
import image4 from "/src/assets/image/44444.png";
import image5 from "/src/assets/image/55555.png";
import image6 from "/src/assets/image/66666.png";
import image7 from "/src/assets/image/77777.png";
import image8 from "/src/assets/image/88888.png";
import image9 from "/src/assets/image/99999.png";
import image10 from "/src/assets/image/10000.png";






function Table() {
  const items = [
    {
      title: "Polio",
      sub: "Causes permanent paralysis or death.",
      img: image1,
    },
    {
      title: "Measles",
      sub: " Leads to rash, cough, fever, and sometimes serious complications  ",
      img: image2,
    },
    {
      title: "Tetanus",
      sub: "Causes painful muscle stiffness, lockjaw, and can be fatal.",
      img: image3,
    },
    {
      title: "Whooping Cough",
      sub: "Brings on severe coughing fits, trouble breathing, and pneumonia",
      img: image4,
    },
    {
      title: "Bacterial Pneumonia",
      sub: "Makes breathing difficult, causes chest pain, and fever.",
      img: image5,
    },
    {
      title: "Bacterial Meningitis",
      sub: " Leads to fever, headache, stiff neck, and can cause brain damage or death.",
      img: image6,
    },
    {
      title: "Hepatitis B ",
      sub: " Damages the liver and can lead to liver cancer.",
      img: image7,
    },
    {
      title: "RSV (Respiratory Syncytial Virus) ",
      sub: " Causes respiratory infections and can lead to pneumonia.",
      img: image8,
    },
    {
      title: "Hib (Haemophilus influenzae type b) ",
      sub: " Leads to infections in the ear, sinuses, lungs, and bloodstream.",
      img: image9,
    },
    {
      title: "Rotavirus ",
      sub: "Causes diarrhea and vomiting, and can lead to dehydration.",
      img: image10,
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
          {items.map((item, index) => (
            <div className="text" key={item.id}>
              <div className="para">
                <h3>
                  {index + 1}- {item.title}
                </h3>
                <p>{item.sub}</p>
              </div>
              {item.img && <img src={item.img} alt={item.title} />}
            </div>
          ))}

          
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
