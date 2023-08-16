import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <Slider></Slider>
      <PopularMenu></PopularMenu>
      <FeaturedItem></FeaturedItem>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
