// src/components/Reviews.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const reviewsData = [
  {
    name: "Emily Carter",
    text: "The food was absolutely delicious! Everything was fresh and flavorful. Will definitely order again.",
  },
  {
    name: "James Holloway",
    text: "Great taste and fast delivery. The portions were generous and satisfying.",
  },
  {
    name: "Olivia Bennett",
    text: "Loved every bite! Especially the pasta – it was cooked to perfection.",
  },
  {
    name: "Daniel Ross",
    text: "Amazing quality and great value for the price. Highly recommend!",
  },
  {
    name: "Sophia Mitchell",
    text: "The food arrived warm and well-packed. Tasted just like homemade – comforting and tasty.",
  },
  {
    name: "Ethan Ramirez",
    text: "Impressive! The ingredients were clearly fresh, and the spices were well balanced.",
  },
  {
    name: "Lily Thompson",
    text: "Beautifully presented and so flavorful. You can tell a lot of care goes into the cooking.",
  },
  {
    name: "Noah Anderson",
    text: "Top-notch! My whole family enjoyed it. We’ll definitely be coming back for more.",
  },
];

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews__inner container">
        <h2 className="reviews__title">Reviews</h2>
        <div className="reviews__swiper swiper">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            effect="coverflow"
            modules={[Navigation, EffectCoverflow]}
            coverflowEffect={{
              rotate: 0,
              depth: 150,
              modifier: 2,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              300: {
                slidesPerView: 1,
              },
            }}
          >
            {reviewsData.map((review, index) => (
              <SwiperSlide key={index} className="reviews__slide">
                <h3 className="reviews__name">{review.name}</h3>
                <p className="reviews__text">{review.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
