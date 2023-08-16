import { Helmet } from "react-helmet-async";
import Cover from "../Share/Cover/Cover";
import MenuImg from '../../assets/assets/menu/banner3.jpg'
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const MenuItems = () => {
    return (
       <div>
        <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={MenuImg} title="our menu" >
      </Cover>
      <PopularMenu></PopularMenu>
      <Cover img={MenuImg} title="our menu" >
      </Cover>
      <PopularMenu></PopularMenu>
      <Cover img={MenuImg} title="our menu" >
      </Cover>
      <PopularMenu></PopularMenu>
      <Cover img={MenuImg} title="our menu" >
      </Cover>
      <PopularMenu></PopularMenu>
      <Cover img={MenuImg} title="our menu" >
      </Cover>
      <PopularMenu></PopularMenu>
       </div>
    );
};

export default MenuItems;