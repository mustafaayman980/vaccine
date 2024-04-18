import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/1-Header/Header.jsx";
import Hero from "./components/2-Hero/Hero.jsx";
import About from "./components/3-About/About.jsx";
import Works from "./components/4-Works/Works.jsx";
import Login from "./assets/pages/1-Login/Login.jsx";
import Profile from "./assets/pages/2-Profile/Profile.jsx";
import CardTime from "./assets/pages/3-Card-time/CardTime.jsx";
import Table from "./assets/pages/4-Tables/Table.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/header" element={<Header />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/works" element={<Works />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/CardTime" element={<CardTime />} />
      <Route path="/Table" element={<Table />} />
    </Routes>
  </BrowserRouter>
);
