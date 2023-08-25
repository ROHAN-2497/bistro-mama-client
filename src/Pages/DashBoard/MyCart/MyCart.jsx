import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  // how does reduce work
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss || My Cart </title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] mb-9 flex items-center justify-evenly">
        <h2 className="text-3xl font-medium">Total Item : {cart.length}</h2>
        <h2 className="text-3xl  font-medium">Total price : ${total}</h2>
        <button className="btn btn-warning btn-sm ml-4">PAY</button>
      </div>{" "}
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-[#D1A054]">
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} />
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end"> ${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost  bg-red-600 text-white"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
