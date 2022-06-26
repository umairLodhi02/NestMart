import { withRouter } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";

import Navbar from "../../Components/Navbar/Navbar";
import NavbarMega from "../../Components/Navbar/NavbarMega";
import NavMobile from "../../Components/Navbar/NavMobile";
import CustomSlider from "../../Components/Slider/CustomSlider";
import "./home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <NavMobile />
      <NavbarMega />
      <Hero />
      <div className="feature_category">
        <div className="section_title mb-5">
          <div className="title d-flex" id="title">
            <h3 className="mr-5">Featured Categories</h3>
            <ul className="list-inline nav nav-tabs links">
              <li className="list-inline-item nav-item">
                <a className="nav-link" href="#">
                  Cake &amp; Milk
                </a>
              </li>
              <li className="list-inline-item nav-item">
                <a className="nav-link" href="#">
                  Coffes &amp; Teas
                </a>
              </li>
              <li className="list-inline-item nav-item">
                <a className="nav-link active" href="#">
                  Pet Foods
                </a>
              </li>
              <li className="list-inline-item nav-item">
                <a className="nav-link" href="#">
                  Vegetables
                </a>
              </li>
            </ul>
          </div>
        </div>

        <CustomSlider></CustomSlider>
      </div>
    </>
  );
};
export default withRouter(Home);
