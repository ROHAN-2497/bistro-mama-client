import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Menu from "../../Share/Menu";
import  useMenu  from "../../../Hooks/useMenu";

const PopularMenu = () => {
const [menu] = useMenu()
const popular = menu.filter(item=> item.category === 'popular') 
  return (
    <section className="mb-12 mt-12">
      <SectionTitle
        heading={"Check It Out"}
        subTitle={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        {popular.map((item) => (
          <Menu key={item._id} item={item}></Menu>
        ))}
      </div>
      <button className="btn btn-outline mt-4  border-0 border-b-4">Order Your Favourite Food</button>
    </section>
  );
};

export default PopularMenu;
