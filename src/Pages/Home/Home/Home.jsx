import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import TeamMember from '../Testimonials/TeamMember';

const Home = () => {
    return (
        <div className=''>

            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <TeamMember/>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;