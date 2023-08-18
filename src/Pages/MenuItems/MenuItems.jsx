import { Helmet } from "react-helmet-async";
import Cover from "../Share/Cover/Cover";
import MenuImg from "../../assets/assets/menu/banner3.jpg";
import dessertImg from "../../assets/assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/assets/menu/salad-bg.jpg";
import soupImg from "../../assets/assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const MenuItems = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "dessert");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={MenuImg} title="our menu"></Cover>
      <SectionTitle
        subTitle="'don't miss"
        heading="today's offered"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={desserts}
        title={"dessert"}
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizzas}
        title={"pizza"}
        img={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={salads}
        title={"salad"}
        img={saladImg}
      ></MenuCategory>
      <MenuCategory items={soups} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default MenuItems;
