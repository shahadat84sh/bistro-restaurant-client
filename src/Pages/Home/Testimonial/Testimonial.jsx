import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  console.log(review);

  return (
    <section>
      <SectionTitle
        subHeading={"What our Client Say"}
        Heading={"Testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="flex flex-col items-center space-y-3 mx-24 my-16">
            <FaQuoteLeft className="text-2xl"/>
              <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
              <p>{item.details}</p>
              <h3 className="text-2xl text-orange-400">{item.name}</h3>
              <FaQuoteLeft className="text-2xl"/>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
