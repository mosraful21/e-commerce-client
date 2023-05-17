import React from 'react';
import icon1 from '../../../assets/images/service-01.png';
import icon2 from '../../../assets/images/service-02.png';
import icon3 from '../../../assets/images/service-03.png';
import icon4 from '../../../assets/images/service-04.png';
import icon5 from '../../../assets/images/service-05.png';

const Servies = () => {

    const services = [
        { icon: icon1, title: 'Free Shapping', desc: 'From all order over $100' },
        { icon: icon2, title: 'Daily Surprise Offers', desc: 'Save up to 25% off' },
        { icon: icon3, title: 'Support 24/7', desc: 'Shop with an Expert' },
        { icon: icon4, title: 'Affordable Prices', desc: 'Get Factory direct price' },
        { icon: icon5, title: 'Secure Payments', desc: '100% Protected Payments' },
    ]

    return (
        <div className='container-xxl'>
            <div className="row">
                <div className="col-12">
                    <div className="servies d-flex align-items-center justify-content-between">
                        {
                            services.map((service, index) => <div key={index} className="d-flex align-items-center gap-3">
                                <img src={service.icon} alt="services" />
                                <div>
                                    <h6>{service.title}</h6>
                                    <p className="mb-0">{service.desc}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servies;