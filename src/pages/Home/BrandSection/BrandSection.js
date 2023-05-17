import React from 'react';
import Marquee from "react-fast-marquee";
import brand1 from "../../../assets/images/brand-01.png";
import brand2 from "../../../assets/images/brand-02.png";
import brand3 from "../../../assets/images/brand-03.png";
import brand4 from "../../../assets/images/brand-04.png";
import brand5 from "../../../assets/images/brand-05.png";
import brand6 from "../../../assets/images/brand-06.png";
import brand7 from "../../../assets/images/brand-07.png";
import brand8 from "../../../assets/images/brand-08.png";

const BrandSection = () => {
    const BrandItem = [
        { image: brand1 },
        { image: brand2 },
        { image: brand3 },
        { image: brand4 },
        { image: brand5 },
        { image: brand6 },
        { image: brand7 },
        { image: brand8 },
    ]

    return (
        <div className='container-xxl'>
            <div className="row">
                <div className="col-12">
                    <div className="marquee-inner-wrapper card-wrapper">
                        <Marquee className="d-flex">
                            {
                                BrandItem.map((Item, index) => <div key={index} className="mx-4 w-25">
                                    <img src={Item.image} alt="brand" />
                                </div>)
                            }
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSection;