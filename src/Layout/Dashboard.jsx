import React from "react";
import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaCartPlus,
  FaChartBar,
  FaHome,
  FaShoppingBag,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
const [isAdmin] = useAdmin()

  // const isAdmin = true;

  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink><FaHome />Admin Home</NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/additem'><FaUtensils/> Add Items</NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/manageitem'><FaBars/> Manage Items </NavLink>
              </li>
              <li>
                <NavLink><FaBook/> Manage Booking </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/allusers'><FaUsers/> All Users </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink>
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <FaCalendarAlt></FaCalendarAlt> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <FaWallet /> Wallet
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaCartPlus /> MyCart
                  <span className="badge">+{cart?.length || 0}</span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaChartBar /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShoppingBag />
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
