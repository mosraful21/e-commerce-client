import React from 'react';
import Banner from './Home/Banner/Banner';
import Servies from './Home/Servies/Servies';
import BrandSection from './Home/BrandSection/BrandSection';
import Blog from './Home/Blog/Blog';
import FeaturedProducts from './Home/FeaturedProducts/FeaturedProducts';
import Categories from './Home/Categories/Categories';


const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <Banner></Banner>
            </section>

            <section className="home-wrapper-2 pt-5">
                <Servies></Servies>
            </section>

            <section className="home-wrapper-2 pt-5">
                <Categories></Categories>
            </section>

            <section className="featured-wrapper py-5 home-wrapper-2">
                <FeaturedProducts></FeaturedProducts>
            </section>

            <section className="marque-wrapper home-wrapper-2 py-5">
                <BrandSection></BrandSection>
            </section>

            <section className="blog-wrapper py-5 home-wrapper-2">
                <Blog></Blog>
            </section>
        </>
    );
};

export default Home;