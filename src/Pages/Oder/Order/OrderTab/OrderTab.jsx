import FoodCart from "../../../../Components/FoodCart/FoodCart";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const OrderTab = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return (
        <div >
         <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="grid md:grid-cols-3  gap-6 m-4 p-4 ">
            {
            items.map(item => <FoodCart
            key={item._id}
            item={item}
            ></FoodCart>)
        }
            </div>
        </SwiperSlide>
     
      </Swiper>
    </div>
    );
};

export default OrderTab;