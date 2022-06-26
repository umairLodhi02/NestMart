import logo from "../../images/logo.svg";
import iconHeart from "../../images/icon-heart.svg";
import iconCart from "../../images/icon-cart.svg";
import iconFB from "../../images/icon-facebook-white.svg";
import iconInsta from "../../images/icon-instagram-white.svg";
import iconTweet from "../../images/icon-twitter-white.svg";
import iconPin from "../../images/icon-pinterest-white.svg";
import iconYT from "../../images/icon-youtube-white.svg";

import ButtonGroup from "../Form/ButtonGroup/ButtonGroup";
import "./navbar.css";
import { FaTimes } from "react-icons/fa";
import CustomAccordion from "../Accordion/Accordion";
import { Accordion, Card } from "react-bootstrap";
import { ACCORDION_DATA } from "../Accordion/Constants";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FiHeadphones } from "react-icons/fi";
const NavMobile = () => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "360px";
    document.getElementById("mySidenav").style.visibility = "visible";
    document.getElementById("mySidenav").style.opacity = "1";

    document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
  }

  return (
    <div className="row navMobile">
      <div className="col-md-12 d-flex align-items-center justify-between">
        <button className="burger" onClick={openNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>

        <div id="mySidenav" className="sidenav">
          <div className="side_logo">
            <img src={logo} alt="" />
          </div>
          <div className="close_btn">
            <button className="closebtn" onClick={closeNav}>
              <FaTimes />
            </button>
          </div>
          <div className="content mt-5">
            <div className="input">
              <input type="text" placeholder="Search for items" />
            </div>
            <Accordion>
              {ACCORDION_DATA.map((item, index) => {
                return (
                  <CustomAccordion key={index} item={item} index={index} />
                );
              })}
            </Accordion>
            <div className="small_card d-flex p-4 m-4 flex-column border-1">
              <div className="row">
                <div className="col-md-12 d-flex align-items-center">
                  <IoLocationOutline />
                  <a href="#">Location</a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex d-flex align-items-center">
                  <AiOutlineUser />
                  <a href="#">Login/Signup</a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex align-items-center">
                  <FiHeadphones />
                  <a href="#">(+01) - 2345 - 6789</a>
                </div>
              </div>
            </div>

            <div className="followus mb-5">
              <div className="row mb-2">
                <div className="col-md-12">
                  <h6>Follow us</h6>
                </div>
              </div>
              <div className="icon_row row">
                <div className="col-md-12 d-flex align-items-center">
                  <a href="#" className="social_icon">
                    <img src={iconFB} alt="" />
                  </a>
                  <a href="#" className="social_icon">
                    <img src={iconInsta} alt="" />
                  </a>
                  <a href="#" className="social_icon">
                    <img src={iconTweet} alt="" />
                  </a>
                  <a href="#" className="social_icon">
                    <img src={iconPin} alt="" />
                  </a>
                  <a href="#" className="social_icon">
                    <img src={iconYT} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="site-copyright">
              Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.
            </div>
          </div>
        </div>

        <div className="logo logo_mobile">
          <img src={logo} alt="" />
        </div>

        <div className="button_group ">
          <ButtonGroup icon={iconHeart} buttonText={""} />
          <ButtonGroup icon={iconCart} buttonText={""} />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
