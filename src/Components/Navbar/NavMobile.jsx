import logo from "../../images/logo.svg";
import iconHeart from "../../images/icon-heart.svg";
import iconCart from "../../images/icon-cart.svg";
import ButtonGroup from "../Form/ButtonGroup/ButtonGroup";
import "./navbar.css";
import { FaTimes } from "react-icons/fa";
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

          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>

        <div className="logo logo_mobile">
          <img src={logo} alt="" />
        </div>

        <div className="button_group ">
          <ButtonGroup icon={iconHeart} buttonText={"Wishlist"} />
          <ButtonGroup icon={iconCart} buttonText={"Cart"} />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
