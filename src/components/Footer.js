import React from 'react';
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../assets/images/newsletter.png";

const Footer = () => {
    return (
        <>
            {/***** Subscribe Section *****/}
            <footer className="py-5">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src={newsletter} alt="newsletter" />
                                <h2 className="mb-0 ms-1 text-white">Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your Email Address"
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-2 px-4" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/***** Information Section *****/}
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact Us</h4>
                            <div>
                                <address className="text-white fs-6">
                                    Jaldhaka, Nilphamari, <br /> Rangpur, Bangladesh <br />
                                    Post Code: 5330
                                </address>
                                <a href="tel:+88 01774 514 821" className="mt-3 d-block mb-1 text-white">
                                    +88 01774 514 821
                                </a>
                                <a href="mailto:mosrafulhabib21@gmail.com" className="mt-2 d-block mb-0 text-white">
                                    mosrafulhabib21@gmail.com
                                </a>
                                <div className="social_icons d-flex align-items-center gap-4 mt-4">
                                    <Link className="text-white" to="">
                                        <BsFacebook className="fs-4" />
                                    </Link>
                                    <Link className="text-white" to="">
                                        <BsLinkedin className="fs-4" />
                                    </Link>
                                    <Link className="text-white" to="">
                                        <BsInstagram className="fs-4" />
                                    </Link>
                                    <Link className="text-white" to="">
                                        <BsGithub className="fs-4" />
                                    </Link>
                                    <Link className="text-white" to="">
                                        <BsYoutube className="fs-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                                <Link className="text-white py-2 mb-1">Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">About Us</Link>
                                <Link className="text-white py-2 mb-1">Faq</Link>
                                <Link className="text-white py-2 mb-1">Contact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Laptops</Link>
                                <Link className="text-white py-2 mb-1">Headphones</Link>
                                <Link className="text-white py-2 mb-1">Tablets</Link>
                                <Link className="text-white py-2 mb-1">Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/***** Developer Section *****/}
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()}; Powered by Mosraful Habib
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;