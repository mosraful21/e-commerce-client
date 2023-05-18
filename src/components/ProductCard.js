import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../assets/images/prodcompare.svg";
import wish from "../assets/images/wish.svg";
import watch from "../assets/images/watch.jpg";
import addcart from "../assets/images/add-cart.svg";
import view from "../assets/images/view.svg";

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div className={` ${location.pathname === "/product" ? `col-${grid}` : "col-3"} `}>
                <Link
                    to={`${location.pathname === "/"
                            ? "/product/:id"
                            : location.pathname === "/product/:id"
                                ? "/product/:id"
                                : ":id"
                        }`}
                    className="product-card position-relative"
                >
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={wish} alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={watch} className="img-fluid" alt="productimage" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt...
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-2">
                            <button className="border-0 bg-transparent">
                                <img src={prodcompare} alt="compare" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={view} alt="view" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={addcart} alt="addcart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ProductCard;