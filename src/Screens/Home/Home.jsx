import { withRouter } from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import NavbarMega from "../../Components/Navbar/NavbarMega";
import NavMobile from "../../Components/Navbar/NavMobile";
const Home = () => {
  return (
    <>
      <Navbar />
      <NavMobile />
      <NavbarMega />
    </>
  );
};
export default withRouter(Home);
