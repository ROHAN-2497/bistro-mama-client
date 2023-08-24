import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";

const DashBoard = () => {
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
      <div className="drawer-side   bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 ">
          {/* Sidebar content here */}
          <li>
            <NavLink to="">
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaCalendar></FaCalendar> ReserVation
            </NavLink>{" "}
          </li>
          <li>
            <NavLink>
              <FaWallet></FaWallet> Payment History
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart></FaShoppingCart>My Cart
            </NavLink>
          </li>
          <div className="divider"></div> 
          <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
          <li><NavLink> Menu</NavLink></li>
          
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
