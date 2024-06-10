import { FaBookmark, FaCalendar, FaComment, FaFax, FaHome, FaSearch, FaShoppingCart, FaShopware, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {

    const [cart] = useCart();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-500">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar></FaCalendar>
                            Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment">
                            <FaWallet></FaWallet>
                            Payment History</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <FaComment></FaComment>
                            Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                            <FaBookmark></FaBookmark>
                            My Bookings</NavLink>
                    </li>

                    <div className="divider"></div>

                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">
                            {/* TODO: need to work */}
                            <FaShopware></FaShopware>
                            Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            {/* TODO: need to work */}
                            <FaFax></FaFax>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;