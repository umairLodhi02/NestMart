import product1 from "../../../images/product-1-1.jpg";
import product2 from "../../../images/product-1-2.jpg";
import "./productcard.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiHeart } from "react-icons/hi";
const ProductCard = ({ customClass }) => {
  return (
    <div id={customClass} className="col-lg-1-5 col-md-4 col-12 col-sm-6">
      <div
        className="product-cart-wrap mb-30 wow animate__ animate__fadeIn animated"
        data-wow-delay=".1s"
      >
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
            <a href="#">
              <img className="default-img" src={product1} alt="" />
              <img className="hover-img" src={product2} alt="" />
            </a>
          </div>
          <div className="product-action-1">
            <a aria-label="Add To Wishlist" className="action-btn" href="#">
              <HiHeart />
            </a>
            <a
              aria-label="Compare"
              className="action-btn"
              href="shop-compare.html"
            >
              <i className="fi-rs-shuffle"></i>
            </a>
            <a
              aria-label="Quick view"
              className="action-btn"
              data-bs-toggle="modal"
              data-bs-target="#quickViewModal"
            >
              <i className="fi-rs-eye"></i>
            </a>
          </div>
          <div className="product-badges product-badges-position product-badges-mrg">
            <span className="hot">Hot</span>
          </div>
        </div>
        <div className="product-content-wrap">
          <div className="product-category">
            <a href="#">Snack</a>
          </div>
          <h2>
            <a href="#">
              Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
            </a>
          </h2>
          <div className="product-rate-cover">
            <div className="product-rate d-inline-block">
              <div className="product-rating"></div>
            </div>
            <span className="font-small ml-5 text-muted"> (4.0)</span>
          </div>
          <div>
            <span className="font-small text-muted">
              By <a href="#">NestFood</a>
            </span>
          </div>
          <div className="product-card-bottom">
            <div className="product-price">
              <span>$28.85</span>
              <span className="old-price">$32.8</span>
            </div>
            <div className="add-cart">
              <a className="add" href="#">
                <AiOutlineShoppingCart /> Add{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
