import React from 'react';
import blog1 from '../../../assets/images/blog-1.jpg';
import { Link } from 'react-router-dom';

const Blog = () => {

    const BlogCard = [
        {
            image: blog1,
            date: '1 Dec, 2022',
            title: 'A beautiful sunday morning renaissance',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat accusamus officia'
        },
        {
            image: blog1,
            date: '5 Dec, 2022',
            title: 'A beautiful sunday morning renaissance',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat accusamus officia'
        },
        {
            image: blog1,
            date: '10 Dec, 2022',
            title: 'A beautiful sunday morning renaissance',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat accusamus officia'
        },
        {
            image: blog1,
            date: '21 Dec, 2022',
            title: 'A beautiful sunday morning renaissance',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat accusamus officia'
        },
    ]

    return (
        <div className='container-xxl'>
            <div className="row">
                <div className="col-12">
                    <h3 className="section-heading">Our Latest Blogs</h3>
                </div>
            </div>
            <div className="row">
                {
                    BlogCard.map((card, index) => <div key={index} className="col-3">
                        <div className="blog-card">
                            <div className="card-image">
                                <img src={card.image} className="img-fluid w-100" alt="blog" />
                            </div>
                            <div className="blog-content">
                                <p className="date">{card.date}</p>
                                <h5 className="title">{card.title}</h5>
                                <p className="desc">{card.desc}</p>
                                <Link to="" className="button">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;