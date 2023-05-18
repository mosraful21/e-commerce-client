import React from 'react';
import ReactStars from "react-rating-stars-component";
import product1 from '../../../assets/images/laptop.jpg';
import product2 from '../../../assets/images/tab.jpg';
import product3 from '../../../assets/images/speaker.jpg';
import product4 from '../../../assets/images/tab2.jpg';
import product5 from '../../../assets/images/watch.jpg';
import product6 from '../../../assets/images/tab3.jpg';
import wishlist from '../../../assets/images/wish.svg';
import prodcompare from '../../../assets/images/prodcompare.svg';
import view from '../../../assets/images/view.svg';
import addcart from '../../../assets/images/add-cart.svg';
import { Link } from 'react-router-dom';

const PopularProducts = () => {

    const products = [
        {
            image: product1,
            brand: 'Apple',
            title: 'Apple Pro Book',
            price: 100.00,
            value: 2,
        },
        {
            image: product2,
            brand: 'Havels',
            title: 'Smart Phone',
            price: 100.00,
            value: 4,
        },
        {
            image: product3,
            brand: 'Havels',
            title: 'Sound Box',
            price: 100.00,
            value: 3,
        },
        {
            image: product4,
            brand: 'Apple',
            title: 'iPad S13+ Pro',
            price: 100.00,
            value: 5,
        },
        {
            image: product5,
            brand: 'Apple',
            title: 'Apple Watch Series 5',
            price: 100.00,
            value: 2,
        },
        {
            image: product6,
            brand: 'Redmi',
            title: 'Redmi Node 9 Pro',
            price: 100.00,
            value: 3,
        },

    ]

    return (
        <div className='container-xxl'>
            <div className="row">
                <div className="col-12">
                    <h3 className="section-heading">Our Popular Products</h3>
                </div>
            </div>
            <div className="row">
                {
                    products.map((product, index) => <div key={index} className="col-2 mb-4">
                        <div className="product-card position-relative">
                            <div className="wishlist-icon position-absolute">
                                <Link>
                                <img src={wishlist} alt="wishlist" />
                                </Link>
                            </div>
                            <div className="product-image">
                                <img src={product.image} className="img-fluid w-100" alt="blog" />
                            </div>
                            <div className="product-details">
                                <h6 className="brand">{product.brand}</h6>
                                <h5 className="product-title">{product.title}</h5>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    edit={false}
                                    value={product.value}
                                    activeColor="#ffd700"
                                />
                                <p className="price">Price: ${product.price}</p>
                            </div>

                            <div className="action-bar position-absolute">
                                <div className="d-flex flex-column gap-3">
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
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularProducts;