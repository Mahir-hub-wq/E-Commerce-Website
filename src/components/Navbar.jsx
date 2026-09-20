import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [favCount, SetFavCunt] = useState(5);
  console.log(favCount);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 text-lg flex items-center justify-between ">
        {/* Logo */}
        <h1 className="text-5xl font-bold text-gray-700 cursor-pointer ">
          Estore
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <NavLink
              to="/"
              className="hover:text-red-500 transition duration-300"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/categories"
              className="hover:text-red-500 transition duration-300"
            >
              Category
            </NavLink>
          </li>

          {/* Latest Dropdown */}
          <li className="relative group">
            <Button text="Hot" className="bg-red-500 text-white" />
            <span className="cursor-pointer hover:text-red-500 transition">
              Latest
            </span>

            <ul
              className="
              absolute
              left-0
              top-14
              w-56
              bg-white
              shadow-xl
              border-t-4
              border-red-500
              rounded-md
              opacity-0
              invisible
              translate-y-5
              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-y-0
              transition-all
              duration-300
              z-50
            "
            >
              <li className="px-5 py-3 hover:bg-red-50 cursor-pointer">
                Product List
              </li>

              <li className="px-5 py-3 hover:bg-red-50 cursor-pointer">
                Product Details
              </li>
            </ul>
          </li>

          {/* Blog Dropdown */}
          <li className="relative group">
            <span className="cursor-pointer hover:text-red-500 transition">
              Blog
            </span>

            <ul
              className="
              absolute
              left-0
              top-14
              w-56
              bg-white
              shadow-xl
              border-t-4
              border-red-500
              rounded-md
              opacity-0
              invisible
              translate-y-5
              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-y-0
              transition-all
              duration-300
              z-50
            "
            >
              <li className="px-5 py-3 hover:bg-red-50 cursor-pointer">Blog</li>

              <li className="px-5 py-3 hover:bg-red-50 cursor-pointer">
                Blog Details
              </li>
            </ul>
          </li>

          {/* Pages Dropdown */}
          <li className="relative group">
            <span className="cursor-pointer hover:text-red-500 transition">
              Pages
            </span>

            <ul
              className="
              absolute
              left-0
              top-14
              w-60
              bg-white
              shadow-xl
              border-t-4
              border-red-500
              rounded-md
              opacity-0
              invisible
              translate-y-5
              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-y-0
              transition-all
              duration-300
              z-50
            "
            >
              <li className="px-5 py-3 hover:bg-red-50 cursor-pointer">
                Login
              </li>

              <li className="px-5 py-3 hover:bg-red-50 cursor-pointer">
                About
              </li>

              <li className="px-5 py-3 hover:bg-red-50 cursor-pointer">
                Elements
              </li>

              <li className="px-5 py-3 hover:bg-red-50 cursor-pointer">
                Confirmation
              </li>
              <NavLink to="/cartList">
                <li className="px-5 py-3 hover:bg-red-50 cursor-pointer">
                  Shopping Cart
                </li>
              </NavLink>

              <li className="px-5 py-3 hover:bg-red-50 cursor-pointer">
                Checkout
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="hover:text-red-500 transition duration-300"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 hover:border-red-500 transition duration-300">
            <input
              type="text"
              placeholder="Search products"
              className="outline-none w-44"
            />

            <button>
              <img
                src="https://cdn-icons-png.flaticon.com/128/17216/17216943.png"
                alt="Search"
                className="w-5 h-5"
              />
            </button>
          </div>

          {/* User */}
          <div className="relative w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
              alt="User"
              className="w-5 h-5"
            />

            <span className="absolute -top-2 -right-2 bg-sky-400 text-white text-[15px] font-bold w-7 h-7 rounded-full flex items-center justify-center">
              {favCount}
            </span>
          </div>

          {/* Cart */}
          <NavLink to="/cartList">
            <div className="relative w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"
                alt="Cart"
                className="w-5 h-5"
              />

              <span className="absolute -top-2 -right-2 bg-sky-400 text-white text-[15px] font-bold w-7 h-7 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            </div>
          </NavLink>

          {/* Button */}
          <Link to="/signup">
            <button className="bg-blue-700 hover:bg-blue-400 text-white px-6 py-2 rounded-full transition duration-300">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
