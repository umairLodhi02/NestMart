import Text from "../../Navbar/Text";
import { SMALL_CARD_DATA } from "../constants";
import { Card } from "react-bootstrap";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./smallcard.css";

const SmallCard = ({
  image,
  headingTop,
  headingMiddle,
  headingBottom,
  buttonText,
}) => {
  return (
    <Card className="mb-5">
      <Card.Img src={image} alt="Card image" style={{ borderRadius: "10px" }} />
      <Card.ImgOverlay>
        <h4>
          {headingTop} <br /> {headingMiddle} <br /> {headingBottom}
        </h4>

        <a href="#" className="btn btn-xs">
          {buttonText} <HiOutlineArrowNarrowRight />
        </a>
      </Card.ImgOverlay>
    </Card>
  );
};

export default SmallCard;
