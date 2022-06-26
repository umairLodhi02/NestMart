import Dropdown from "../Form/Dropdown/Dropdown";
import iconHeadPhone from "../../images/icon-headphone.svg";
import "./navbar.css";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import Text from "./Text";
import {
  home,
  blog,
  shop,
  vendors,
  pages,
  CATEGORIES1,
  CATEGORIES2,
} from "./Constants";

const NavbarMega = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="row">
      <div className="col-md-12 d-flex justify-between align-items-center">
        <div className="mega_drop d-none d-lg-block ">
          <button
            className="d-flex justify-center align-items-center gap-2"
            onClick={() => setOpen(!open)}
          >
            <AiOutlineAppstore />
            Browse All Categories
            <IoMdArrowDropdown />
          </button>

          {open && (
            <div className="mega_content">
              <div className="inner d-flex" style={{ minWidth: "423px" }}>
                <div>
                  {CATEGORIES1.map((item, index) => {
                    return (
                      <Text
                        key={index}
                        icon={item.icon}
                        text={item.text}
                        customClasses={"mega_link"}
                      />
                    );
                  })}
                </div>
                <div>
                  {CATEGORIES2.map((item, index) => {
                    return (
                      <Text
                        key={index}
                        icon={item.icon}
                        text={item.text}
                        customClasses={"mega_link"}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          )}
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
