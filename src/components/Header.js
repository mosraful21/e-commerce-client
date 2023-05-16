import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../assets/images/compare.svg";
import wishlist from "../assets/images/wishlist.svg";
import user from "../assets/images/user.svg";
import cart from "../assets/images/cart.svg";
import menu from "../assets/images/menu.svg";

const Header = () => {

    const menuItem = [
        { id: 1, name1: 'Compare', name2: 'Products', link: '/compare-product', image: compare },
        { id: 2, name1: 'Favourite', name2: 'Wishlist', link: '/wishlist', image: wishlist },
        { id: 3, name1: 'Log In', name2: 'My Account', link: '/login', image: user }
    ]

    return (
        <>
            {/***** Header Top Section *****/}
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">
                                Free Shipping Over 2000 BDT & Free Returns
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Hotline:
                                <a className="text-white" href="tel:+88 01774 514 821">
                                    +88 01774 514 821
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/***** Header Upper Section *****/}
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className="text-white">MH. Shop</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Search Product Here"
                                    aria-label="Search Product Here"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className="fs-6" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                {
                                    menuItem.map(menu => <div key={menu.id}>
                                        <Link
                                            to={menu.link}
                                            className="d-flex align-items-center gap-2 text-white"
                                        >
                                            <img src={menu.image} alt="icon" />
                                            <p className="mb-0">{menu.name1} <br /> {menu.name2}</p>
                                        </Link>
                                    </div>)
                                }

                                <div>
                                    <Link
                                        to="/cart"
                                        className="d-flex align-items-center gap-2 text-white"
                                    >
                                        <img src={cart} alt="cart" />
                                        <div className="d-flex flex-column gap-1">
                                            <span className="badge bg-white text-dark">0</span>
                                            <p className="mb-0">$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/***** Header Buttom Section *****/}
            <header className="header-bottom py-1">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-5">
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-3 d-flex align-items-center"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img src={menu} alt="icon" />
                                            <span className="me-5 d-inline-block">
                                                Shop Categories
                                            </span>
                                        </button>

                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item text-white" to="">Action</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="">Another action</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="">Something else here</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-4">
                                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/">Home</NavLink>
                                        <NavLink to="/product">Our Store</NavLink>
                                        <NavLink to="/blogs">Blogs</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;