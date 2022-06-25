import Dropdown from "../Form/Dropdown/Dropdown";
import iconHeadPhone from "../../images/icon-headphone.svg";
import "./navbar.css";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
const NavbarMega = () => {
  const home = [
    "Home",
    "Home 1",
    "Home 2",
    "Home 3",
    "Home 4",
    "Home 5",
    "Home 6",
  ];
  const shop = [
    "Shop",
    "Shop 1",
    "Shop 2",
    "Shop 3",
    "Shop 4",
    "Shop 5",
    "Shop 6",
  ];
  const vendors = [
    "Vendors",
    "Vendors 1",
    "Vendors 2",
    "Vendors 3",
    "Vendors 4",
    "Vendors 5",
    "Vendors 6",
  ];
  const blog = [
    "Blog",
    "Blog 1",
    "Blog 2",
    "Blog 3",
    "Blog 4",
    "Blog 5",
    "Blog 6",
  ];
  const pages = [
    "Pages",
    "Pages 1",
    "Pages 2",
    "Pages 3",
    "Pages 4",
    "Pages 5",
    "Pages 6",
  ];
  return (
    <div className="row">
      <div className="col-md-12 d-flex justify-between align-items-center">
        <div className="mega_drop d-none d-lg-block ">
          <button className="d-flex justify-center align-items-center gap-2">
            <AiOutlineAppstore />
            Browse All Categories
            <IoMdArrowDropdown />
          </button>
        </div>

        <div
          className="nav_links d-flex align-items-center gap-10"
          id="nav_links"
        >
          <Dropdown options={home} />
          <a href="#">About</a>
          <Dropdown options={shop} />
          <Dropdown options={vendors} />
          <Dropdown options={home} />
          <Dropdown options={blog} />
          <Dropdown options={pages} />
          <a href="#">Contact</a>
        </div>
        <div
          className="d-flex justify-center align-items-center gap-1 supports"
          id="supports"
        >
          <img src={iconHeadPhone} alt="" />
          <div>
            <p className="m-0 text_green">1900&nbsp;-&nbsp;888</p>
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarMega;
