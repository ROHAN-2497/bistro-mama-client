
const Menu = ({item}) => {
    const {image, recipe,name, price} = item
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: "0px 200px 200px 200px"}} className="w-[104px]" src={image} alt="" />
            <div>
            <h3 className="text-2xl">{name}--------</h3>
            <p>{recipe}</p>
            </div>
            <p className="text-yellow-300">${price}</p>
        </div>
    );
};

export default Menu;