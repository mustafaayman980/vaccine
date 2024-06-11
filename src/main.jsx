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
import Safety from "./assets/pages/5-Safety/Safety.jsx";
import Benefits from "./assets/pages/6-Benefits/Benefits.jsx";
import Footer from "./components/5-Footer/Footer.jsx";
import Intro from "./assets/pages/7-Intro/Intro.jsx";
import Hospt from "./assets/pages/8-Hospt/Hospt.jsx";
import AuthContext from "./context/AuthContext.jsx";
import ViewOne from "./assets/pages/9-view/ViewOne.jsx";
import Forget from "./assets/pages/10-forget/Forget.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContext>
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
        <Route path="/Safety" element={<Safety />} />
        <Route path="/Benefits" element={<Benefits />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/Hospt" element={<Hospt />} />
        <Route path="/ViewOne" element={<ViewOne />} />
        <Route path="/Forget" element={<Forget />} />

        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  </AuthContext>
);
