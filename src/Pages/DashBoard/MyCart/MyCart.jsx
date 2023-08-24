import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum , 0)
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || My Cart </title>
      </Helmet>
      <div className="uppercase">
        <h2 className="text-3xl font-medium">Total Item : {cart.length}</h2>
        <h2 className="text-3xl font-medium">Total price : ${total}</h2>
        <button className="btn btn-warning btn-sm">PAY</button>
        </div>{" "}
    </div>
  );
};

export default MyCart;
