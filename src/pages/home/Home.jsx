import { Link } from "react-router-dom";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import PageFooter from "../../components/footer/Footer";

export default function Home() {
  return (
    <div className="Home-container">
      <Navbar isHome={"true"} />
      <div className="home-hero-container">
        <div className="logo-wrapper">
          <img
            src="src/assets/images/main_logo.png"
            className="home-logo"
            alt="LeftOver"
          />
        </div>
        <div className="home-btn-cont">
          <Link to="/help">
            <button className="btn m-2">Share Your Leftover Food</button>
          </Link>
          <Link to="/availbleFood">
            <button className="btn m-1">Leftover Food Around You</button>
          </Link>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}
