import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const Testimonials = () => {



    const [reviews, setReviews] = useState([])

    useEffect(() => {

        fetch('https://bistro-boss-server-jhtanjim.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {

                setReviews(data)
            })


    }, [])





    return (
        <section className='my-20'>
            <SectionTitle
                subHeading='What Our Client Say'
                heading={'Testimonials'}

            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide

                        key={review._id}


                    >
                        <div className='m-24 flex flex-col items-center my-16 mx-24'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='py-8 text-sm'>{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>

                        </div>

                    </SwiperSlide>)
                }





            </Swiper>
        </section>
    );
};

export default Testimonials;