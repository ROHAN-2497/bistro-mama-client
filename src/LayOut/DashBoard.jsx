import { NavLink, Outlet } from "react-router-dom";
import {
  FaAndroid,
  FaBook,
  FaCalendar,
  FaHome,
  FaShoppingCart,
  FaSlidersH,
  FaUser,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();
  // TODO load data from the server to have dynamic isadmin based on data
  const isAdmin = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  ">
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaUtensils></FaUtensils>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additem">
                  <FaCalendar></FaCalendar> ADD AN ITEMS
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/dashboard/manageitem">
                  <FaWallet></FaWallet> MANAGE ITEMS
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaBook></FaBook> MANAGE BOOKINGS
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                 <FaUser></FaUser> ALL USERS
                </NavLink>{" "}
              </li>
              
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu"> Menu</NavLink>
              </li>
              <li>
                <NavLink to="/order/salad"> Order Food</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar> ReserVation
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet> Payment History
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart>My Cart
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu">
                  <FaSlidersH></FaSlidersH> Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/order/salad">
                  {" "}
                  <FaAndroid></FaAndroid> Order Food
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
