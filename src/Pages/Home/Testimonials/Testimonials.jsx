import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

export default function Testimonials() {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch('reviews.json')
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle subHeading="What Our Client Say" heading={'Testimonials'} />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col justify-center items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-5">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
