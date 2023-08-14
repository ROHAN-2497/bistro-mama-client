import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "../../../assets/assets/home/slide1.jpg";
import slider2 from "../../../assets/assets/home/slide2.jpg";
import slider3 from "../../../assets/assets/home/slide3.jpg";
import slider4 from "../../../assets/assets/home/slide4.jpg";
import slider5 from "../../../assets/assets/home/slide5.jpg";
const Slider = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mt-20 mb-20"
    >
      <SwiperSlide>
        <img src={slider1} alt="" />
        <h3 className="uppercase text-4xl text-center -mt-16 font-semibold text-white">salads</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="" />
        <h3 className="uppercase text-4xl text-center -mt-16 font-semibold text-white">soups</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="" />{" "}
        <h3 className="uppercase text-4xl text-center -mt-16 font-semibold text-white">pizzas</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt="" />{" "}
        <h3 className="uppercase text-4xl text-center -mt-16 font-semibold text-white">deserts</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider5} alt="" />{" "}
        <h3 className="uppercase text-4xl text-center -mt-16 font-semibold text-white">drinks</h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
