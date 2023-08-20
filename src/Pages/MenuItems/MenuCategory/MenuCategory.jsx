import { Link } from "react-router-dom";
import Cover from "../../Share/Cover/Cover";
import Menu from "../../Share/Menu";

const MenuCategory = ({items, img, title}) => {
    return (
        <div>
             {title && <Cover img={img} title={title} >
      </Cover>}
               <div className="grid md:grid-cols-2 gap-12 my-20 ">
        {items.map((item) => (
          <Menu key={item._id} item={item}></Menu>
        ))}
      </div>
      <div> 
      <Link to={`/order/${title}`}><button className="btn btn-outline text-center mb-16 border-0 border-b-4">Order Your Favourite Food</button></Link>
      </div>
  
        </div>
    );
};

export default MenuCategory;