import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11:00 am to 6:00 pm"}
        Heading={"Category"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className="text-4xl text-white uppercase -mt-16 text-center">Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
        <h1 className="text-4xl text-white uppercase -mt-16 text-center">pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        <h1 className="text-4xl text-white uppercase -mt-16 text-center">soup</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
        <h1 className="text-4xl text-white uppercase -mt-16 text-center">desert</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
        <h1 className="text-4xl text-white uppercase -mt-16 text-center">Salad</h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
