import React from 'react';
import item1 from '../../../assets/images/camera.jpg';
import item2 from '../../../assets/images/tv.jpg';
import item3 from '../../../assets/images/camera.jpg';
import item4 from '../../../assets/images/camera.jpg';
import item5 from '../../../assets/images/headphone.jpg';
import item6 from '../../../assets/images/camera.jpg';
import item7 from '../../../assets/images/camera.jpg';
import item8 from '../../../assets/images/headphone.jpg';

const Categories = () => {

    const products = [
        { image: item1, title: 'Cameras', item: '10 Items' },
        { image: item2, title: 'Smart Tv', item: '10 Items' },
        { image: item3, title: 'Cameras', item: '10 Items' },
        { image: item4, title: 'Smart Watches', item: '10 Items' },
        { image: item5, title: 'Music & Gaming', item: '10 Items' },
        { image: item6, title: 'Smart Tv', item: '10 Items' },
        { image: item7, title: 'Smart Watches', item: '10 Items' },
        { image: item8, title: 'Music & Gaming', item: '10 Items' },
    ]

    return (
        <div className='container-xxl'>
            <div className="row">
                <div className="col-12">
                    <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                        {
                            products.map((product, index) => <div key={index} className="d-flex align-items-center">
                                <div>
                                    <h6>{product.title}</h6>
                                    <p>{product.item}</p>
                                </div>
                                <img src={product.image} alt="camera" />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;