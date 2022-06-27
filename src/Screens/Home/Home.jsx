import { withRouter } from "react-router-dom";
import SmallCard from "../../Components/Card/SmallCard/SmallCard";
import Hero from "../../Components/Hero/Hero";

import Navbar from "../../Components/Navbar/Navbar";
import NavbarMega from "../../Components/Navbar/NavbarMega";
import NavMobile from "../../Components/Navbar/NavMobile";
import CustomSlider from "../../Components/Slider/CustomSlider";
import {
  BEST_SELLS,
  CARD_DATA,
  FEATURE_CATEGORIES,
  POPULAR_PRODUCTS,
} from "./constants";

import banner4 from "../../images/banner-4.png";
import "./home.css";
import ProductCard from "../../Components/Card/ProductCard/ProductCard";
import ProductSlider from "../../Components/Slider/ProductSlider/ProductSlider";
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
              {FEATURE_CATEGORIES.map((cat, index) => {
                return (
                  <li className="list-inline-item nav-item" key={index}>
                    <a href="#" className="nav-link">
                      {cat}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <CustomSlider />
        <div className="row">
          {CARD_DATA.map((card, index) => {
            return (
              <div className="col-md-4" key={index}>
                <SmallCard
                  image={card.imaage}
                  headingTop={card.headingTop}
                  headingBottom={card.headingBottom}
                  headingMiddle={card.headingMiddle}
                  buttonText={card.buttonText}
                />
              </div>
            );
          })}
        </div>
        <div className="popular">
          <div className="title d-flex justify-content-between mb-5" id="title">
            <h3 className="mr-5">Populer Products</h3>
            <ul className="list-inline nav nav-tabs links">
              {POPULAR_PRODUCTS.map((cat, index) => {
                return (
                  <li className="list-inline-item nav-item" key={index}>
                    <a href="#" className="nav-link">
                      {cat}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="tab-content">
            <div className="tab-pane fade active show">
              <div className="row">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
        <div className="best_sells">
          <div className="title d-flex justify-content-between mb-5" id="title">
            <h3 className="mr-5">Daily Best Sells</h3>
            <ul className="list-inline nav nav-tabs links">
              {BEST_SELLS.map((cat, index) => {
                return (
                  <li className="list-inline-item nav-item" key={index}>
                    <a href="#" className="nav-link">
                      {cat}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-3 d-none d-lg-flex wow animate__ animate__fadeIn animated">
              <SmallCard
                headingTop={"Bring nature"}
                headingMiddle="into your"
                headingBottom={"Home"}
                buttonText="Shop Now"
                image={banner4}
              />
            </div>
            <div className="col-lg-9 col-md-12">
              <ProductSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default withRouter(Home);
