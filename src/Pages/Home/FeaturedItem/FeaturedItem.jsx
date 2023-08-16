import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/assets/home/featured.jpg";
import './FeaturedItems.css'

const FeaturedItem = () => {
  return (
    <div className="FeturedItems bg-opacity-30 bg-fixed px-20 text-white pt-10 my-20">
      <SectionTitle
        heading="Check It Out"
        subTitle="FROM OUR MENU"
      ></SectionTitle>
    <div  className="md:flex justify-center bg-opacity-30 bg-black items-center gap-5 pb-20 py-8 px-36">
    <div>
        <img src={featuredImg} alt="" />
      </div>
      <div className="md:ml-10">
        <p>
          March 20, 2023 <br /> WHERE CAN I GET SOME? <br /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Error voluptate facere, deserunt dolores
          maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium
          tempore consequatur consequuntur omnis ullam maxime tenetur.
        </p>
        <button className="btn btn-outline  border-0 border-b-4">Read More</button>
      </div>
    </div>
    </div>
  );
};

export default FeaturedItem;
