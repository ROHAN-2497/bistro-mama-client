import FoodCart from "../../../../Components/FoodCart/FoodCart";

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3  gap-6 m-4 p-4 ">
        {
            items.map(item => <FoodCart
            key={item._id}
            item={item}
            ></FoodCart>)
        }
    </div>
    );
};

export default OrderTab;