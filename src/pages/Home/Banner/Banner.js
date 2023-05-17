import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../../assets/images/main-banner-1.jpg';
import catimg1 from '../../../assets/images/catbanner-01.jpg';
import catimg2 from '../../../assets/images/catbanner-02.jpg';
import catimg3 from '../../../assets/images/catbanner-03.jpg';
import catimg4 from '../../../assets/images/catbanner-04.jpg';

const Banner = () => {

    const Banner = [
        { image: banner1, quality: 'SUPERCHARGED FOR PROS', title: 'iPhone 14 pro', price: 'From $1220.00 or $60.80/month' },
    ]

    const CatBanner = [
        { image: catimg1, quality: 'Best Sake', title: 'Apple Pro Book', price1: 'From $1250.80', price2: 'or $80.50/month' },
        { image: catimg2, quality: 'NEW ARRIVAL', title: 'Apple Watch 5', price1: 'From $650.40', price2: 'or $35.50/month' },
        { image: catimg3, quality: 'Best Sake', title: 'iPad S13+ Pro', price1: 'From $950.50', price2: 'or $40.80/month' },
        { image: catimg4, quality: 'Best Sake', title: 'Headphone 4', price1: 'From $240.60', price2: 'or $25.60/month' },
    ]

    return (
        <div className='container-xxl'>
            <div className="row">
                <div className="col-6 p-2">
                    {
                        Banner.map((banner, index) => <div key={index} className="main-banner position-relative ">
                            <img src={banner.image} className="img-fluid rounded-3" alt="main banner" />
                            <div className="main-banner-content position-absolute">
                                <h4>{banner.quality}</h4>
                                <h5>{banner.title}</h5>
                                <p>{banner.price}</p>
                                <Link className="button">BUY NOW</Link>
                            </div>
                        </div>)
                    }
                </div>

                <div className="col-6 p-2">
                    <div className="d-flex flex-wrap gap-12 justify-content-between align-items-center">
                        {
                            CatBanner.map((catBanner, index) => <div key={index} className="small-banner position-relative ">
                                <img src={catBanner.image} className="img-fluid rounded-3" alt="main banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>{catBanner.quality}</h4>
                                    <h5>{catBanner.title}</h5>
                                    <p>{catBanner.price1} <br /> {catBanner.price2}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;