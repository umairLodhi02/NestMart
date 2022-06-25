import InputGroup from "../Form/InputGroup/InputGroup";
import logo from "../../images/logo.svg";
import iconCompare from "../../images/icon-compare.svg";
import iconHeart from "../../images/icon-heart.svg";
import iconCart from "../../images/icon-cart.svg";
import iconUser from "../../images/icon-user.svg";
import ButtonGroup from "../Form/ButtonGroup/ButtonGroup";
import "./navbar.css";
import Dropdown from "../Form/Dropdown/Dropdown";
const Navbar = () => {
  const options = ["Your Location", "New york", "albania"];
  return (
    <div className="row navWeb pt-4 pb-4">
      <div className="col-md-12 d-flex align-items-center justify-between">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <InputGroup />
        <div className="location_drop w-1/4 bg-slate-50 ml-2 px-4 py-2">
          <Dropdown options={options} />
        </div>
        <div className="button_group ">
          <ButtonGroup icon={iconCompare} buttonText={"Compare"} />
          <ButtonGroup icon={iconHeart} buttonText={"Wishlist"} />
          <ButtonGroup icon={iconCart} buttonText={"Cart"} />
          <ButtonGroup icon={iconUser} buttonText={"Account"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
