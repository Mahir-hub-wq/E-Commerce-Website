import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Search, ChevronDown } from "lucide-react";

import Button from "./Button";

const Navbar = () => {
  // ================= REDUX =================

  const cartItems = useSelector((state) => state.cart.cartItems);

  const products = useSelector((state) => state.products.items);

  // ================= NAVIGATION =================

  const navigate = useNavigate();

  // ================= SEARCH =================

  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // ================= MOBILE MENU =================

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ================= COUNTS =================

  const favCount = 5;

  // ================= SEARCH PRODUCTS =================

  const filteredProducts = products.filter((product) => {
    const searchText = search.toLowerCase().trim();

    if (!searchText) return false;

    return (
      product.title.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText)
    );
  });

  // ================= SEARCH SUBMIT =================

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/search?q=${encodeURIComponent(search.trim())}`);

    setShowSuggestions(false);
    setMobileMenuOpen(false);
  };

  // ================= PRODUCT SUGGESTION CLICK =================

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);

    setSearch("");
    setShowSuggestions(false);
    setMobileMenuOpen(false);
  };

  // ================= CLOSE MOBILE MENU =================

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      {/* =========================================================
          MAIN NAVBAR
      ========================================================= */}

      <div
        className="
          max-w-7xl
          mx-auto
          min-h-20
          px-4
          sm:px-5
          md:px-6
          lg:px-8
          flex
          items-center
          justify-between
          gap-4
        "
      >
        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          to="/"
          onClick={closeMobileMenu}
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-700
            cursor-pointer
            shrink-0
          "
        >
          Estore
        </Link>

        {/* =====================================================
            DESKTOP / TABLET NAVIGATION
            Hidden below lg
        ===================================================== */}

        <ul
          className="
            hidden
            lg:flex
            items-center
            gap-4
            xl:gap-7
            font-medium
            text-gray-700
            whitespace-nowrap
          "
        >
          {/* HOME */}

          <li>
            <NavLink
              to="/"
              className="hover:text-red-500 transition duration-300"
            >
              Home
            </NavLink>
          </li>

          {/* CATEGORY */}

          <li>
            <NavLink
              to="/categories"
              className="hover:text-red-500 transition duration-300"
            >
              Category
            </NavLink>
          </li>

          {/* =================================================
              LATEST DROPDOWN
          ================================================= */}

          <li className="relative group">
            <div className="flex items-center gap-2">
              <Button text="Hot" className="bg-red-500 text-white" />

              <span className="cursor-pointer hover:text-red-500 transition">
                Latest
              </span>
            </div>

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
              <li
                className="
                  px-5
                  py-3
                  hover:bg-red-50
                  cursor-pointer
                "
              >
                Product List
              </li>

              <li
                className="
                  px-5
                  py-3
                  hover:bg-red-50
                  cursor-pointer
                "
              >
                Product Details
              </li>
            </ul>
          </li>

          {/* =================================================
              BLOG DROPDOWN
          ================================================= */}

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
              <li
                className="
                  px-5
                  py-3
                  hover:bg-red-50
                  cursor-pointer
                "
              >
                Blog
              </li>

              <li
                className="
                  px-5
                  py-3
                  hover:bg-red-50
                  cursor-pointer
                "
              >
                Blog Details
              </li>
            </ul>
          </li>

          {/* =================================================
              PAGES DROPDOWN
          ================================================= */}

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
              <li
                className="
                  px-5
                  py-3
                  hover:bg-red-50
                  cursor-pointer
                "
              >
                Login
              </li>

              <li
                className="
                  px-5
                  py-3
                  hover:bg-red-50
                  cursor-pointer
                "
              >
                About
              </li>

              <li
                className="
                  px-5
                  py-3
                  hover:bg-red-50
                  cursor-pointer
                "
              >
                Elements
              </li>

              <li
                className="
                  px-5
                  py-3
                  hover:bg-red-50
                  cursor-pointer
                "
              >
                Confirmation
              </li>

              <NavLink to="/cartList">
                <li
                  className="
                    px-5
                    py-3
                    hover:bg-red-50
                    cursor-pointer
                  "
                >
                  Shopping Cart
                </li>
              </NavLink>

              <li
                className="
                  px-5
                  py-3
                  hover:bg-red-50
                  cursor-pointer
                "
              >
                Checkout
              </li>
            </ul>
          </li>

          {/* CONTACT */}

          <li>
            <NavLink
              to="/contact"
              className="hover:text-red-500 transition duration-300"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* =================================================
              SEARCH
          ================================================= */}

          <form
            onSubmit={handleSearch}
            className="
              relative
              hidden
              sm:block
            "
          >
            <div
              className="
                flex
                items-center
                border
                border-gray-300
                rounded-full
                px-3
                sm:px-4
                py-2
                hover:border-red-500
                focus-within:border-red-500
                transition
                duration-300
                w-[180px]
                md:w-[220px]
                lg:w-[200px]
                xl:w-[240px]
              "
            >
              <input
                type="text"
                value={search}
                placeholder="Search products"
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="
                  outline-none
                  w-full
                  min-w-0
                  text-sm
                "
              />

              {/* CLEAR BUTTON */}

              {search && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setShowSuggestions(false);
                  }}
                  className="
                    text-gray-400
                    hover:text-red-500
                    mr-2
                    shrink-0
                  "
                >
                  <X size={17} />
                </button>
              )}

              {/* SEARCH BUTTON */}

              <button type="submit" className="shrink-0">
                <Search
                  size={20}
                  className="text-gray-600 hover:text-red-500"
                />
              </button>
            </div>

            {/* SEARCH SUGGESTIONS */}

            {showSuggestions && search.trim() !== "" && (
              <div
                className="
                  absolute
                  top-14
                  right-0
                  sm:left-0
                  sm:right-auto
                  w-[280px]
                  sm:w-80
                  max-w-[calc(100vw-2rem)]
                  bg-white
                  rounded-lg
                  shadow-xl
                  border
                  border-gray-200
                  overflow-hidden
                  z-[100]
                "
              >
                {filteredProducts.length > 0 ? (
                  <>
                    {filteredProducts.slice(0, 5).map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="
                            flex
                            items-center
                            gap-3
                            p-3
                            hover:bg-gray-100
                            cursor-pointer
                          "
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="
                              w-12
                              h-12
                              object-contain
                              shrink-0
                            "
                        />

                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">
                            {product.title}
                          </p>

                          <p className="text-sm text-gray-500">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* VIEW ALL */}

                    <button
                      type="submit"
                      className="
                        w-full
                        border-t
                        px-4
                        py-3
                        text-blue-600
                        font-medium
                        hover:bg-gray-50
                      "
                    >
                      View all results →
                    </button>
                  </>
                ) : (
                  <div className="p-5 text-center">
                    <p className="text-gray-500">No products found</p>
                  </div>
                )}
              </div>
            )}
          </form>

          {/* =================================================
              USER ICON
          ================================================= */}

          <div
            className="
              relative
              w-9
              h-9
              sm:w-10
              sm:h-10
              lg:w-11
              lg:h-11
              rounded-full
              border
              border-gray-300
              flex
              items-center
              justify-center
              cursor-pointer
              hover:bg-gray-100
              transition
              duration-300
            "
          >
            <User size={19} className="text-gray-700" />

            <span
              className="
                absolute
                -top-2
                -right-2
                bg-sky-400
                text-white
                text-[11px]
                sm:text-[13px]
                font-bold
                w-5
                h-5
                sm:w-6
                sm:h-6
                rounded-full
                flex
                items-center
                justify-center
              "
            >
              {favCount}
            </span>
          </div>

          {/* =================================================
              CART
          ================================================= */}

          <NavLink to="/cartList">
            <div
              className="
                relative
                w-9
                h-9
                sm:w-10
                sm:h-10
                lg:w-11
                lg:h-11
                rounded-full
                border
                border-gray-300
                flex
                items-center
                justify-center
                cursor-pointer
                hover:bg-gray-100
                transition
                duration-300
              "
            >
              <ShoppingCart size={19} className="text-gray-700" />

              <span
                className="
                  absolute
                  -top-2
                  -right-2
                  bg-sky-400
                  text-white
                  text-[11px]
                  sm:text-[13px]
                  font-bold
                  w-5
                  h-5
                  sm:w-6
                  sm:h-6
                  rounded-full
                  flex
                  items-center
                  justify-center
                "
              >
                {cartItems.length}
              </span>
            </div>
          </NavLink>

          {/* =================================================
              SIGN IN
          ================================================= */}

          <Link to="/signup">
            <button
              className="
                hidden
                md:block
                bg-blue-700
                hover:bg-blue-400
                text-white
                px-4
                lg:px-6
                py-2
                rounded-full
                transition
                duration-300
                whitespace-nowrap
                text-sm
                lg:text-base
              "
            >
              Sign In
            </button>
          </Link>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              lg:hidden
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-lg
              border
              border-gray-300
              hover:bg-gray-100
              transition
              duration-300
            "
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* =========================================================
          MOBILE MENU
          Visible below lg
      ========================================================= */}

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          border-t
          border-gray-100
          ${mobileMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-4 sm:px-6 py-4 bg-white">
          {/* ================= MOBILE SEARCH ================= */}

          <form onSubmit={handleSearch} className="relative mb-4">
            <div
              className="
                flex
                items-center
                border
                border-gray-300
                rounded-full
                px-4
                py-2
                focus-within:border-red-500
              "
            >
              <input
                type="text"
                value={search}
                placeholder="Search products"
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="
                  outline-none
                  w-full
                  min-w-0
                  text-sm
                "
              />

              {search && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setShowSuggestions(false);
                  }}
                  className="text-gray-400 hover:text-red-500 mr-2"
                >
                  <X size={18} />
                </button>
              )}

              <button type="submit" className="shrink-0">
                <Search size={20} />
              </button>
            </div>

            {/* MOBILE SEARCH SUGGESTIONS */}

            {showSuggestions && search.trim() !== "" && (
              <div
                className="
                  absolute
                  top-14
                  left-0
                  w-full
                  bg-white
                  rounded-lg
                  shadow-xl
                  border
                  border-gray-200
                  overflow-hidden
                  z-[100]
                "
              >
                {filteredProducts.length > 0 ? (
                  <>
                    {filteredProducts.slice(0, 5).map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="
                            flex
                            items-center
                            gap-3
                            p-3
                            hover:bg-gray-100
                            cursor-pointer
                          "
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-10 h-10 object-contain shrink-0"
                        />

                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">
                            {product.title}
                          </p>

                          <p className="text-sm text-gray-500">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    ))}

                    <button
                      type="submit"
                      className="
                        w-full
                        border-t
                        px-4
                        py-3
                        text-blue-600
                        font-medium
                        hover:bg-gray-50
                      "
                    >
                      View all results →
                    </button>
                  </>
                ) : (
                  <div className="p-5 text-center">
                    <p className="text-gray-500">No products found</p>
                  </div>
                )}
              </div>
            )}
          </form>

          {/* ================= MOBILE NAV LINKS ================= */}

          <ul className="flex flex-col gap-1 font-medium text-gray-700">
            {/* HOME */}

            <li>
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className="
                  block
                  px-4
                  py-3
                  rounded-lg
                  hover:bg-red-50
                  hover:text-red-500
                  transition
                "
              >
                Home
              </NavLink>
            </li>

            {/* CATEGORY */}

            <li>
              <NavLink
                to="/categories"
                onClick={closeMobileMenu}
                className="
                  block
                  px-4
                  py-3
                  rounded-lg
                  hover:bg-red-50
                  hover:text-red-500
                  transition
                "
              >
                Category
              </NavLink>
            </li>

            {/* LATEST */}

            <li>
              <div
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-3
                  rounded-lg
                  hover:bg-red-50
                "
              >
                <Button text="Hot" className="bg-red-500 text-white" />

                <span>Latest</span>

                <ChevronDown size={17} className="ml-auto" />
              </div>

              <div className="ml-5 border-l-2 border-red-100">
                <div
                  className="
                    px-4
                    py-2
                    text-sm
                    hover:text-red-500
                    cursor-pointer
                  "
                >
                  Product List
                </div>

                <div
                  className="
                    px-4
                    py-2
                    text-sm
                    hover:text-red-500
                    cursor-pointer
                  "
                >
                  Product Details
                </div>
              </div>
            </li>

            {/* BLOG */}

            <li>
              <div
                className="
                  flex
                  items-center
                  px-4
                  py-3
                  rounded-lg
                  hover:bg-red-50
                "
              >
                <span>Blog</span>

                <ChevronDown size={17} className="ml-auto" />
              </div>

              <div className="ml-5 border-l-2 border-red-100">
                <div
                  className="
                    px-4
                    py-2
                    text-sm
                    hover:text-red-500
                    cursor-pointer
                  "
                >
                  Blog
                </div>

                <div
                  className="
                    px-4
                    py-2
                    text-sm
                    hover:text-red-500
                    cursor-pointer
                  "
                >
                  Blog Details
                </div>
              </div>
            </li>

            {/* PAGES */}

            <li>
              <div
                className="
                  flex
                  items-center
                  px-4
                  py-3
                  rounded-lg
                  hover:bg-red-50
                "
              >
                <span>Pages</span>

                <ChevronDown size={17} className="ml-auto" />
              </div>

              <div className="ml-5 border-l-2 border-red-100">
                <div
                  className="
                    px-4
                    py-2
                    text-sm
                    hover:text-red-500
                    cursor-pointer
                  "
                >
                  Login
                </div>

                <div
                  className="
                    px-4
                    py-2
                    text-sm
                    hover:text-red-500
                    cursor-pointer
                  "
                >
                  About
                </div>

                <div
                  className="
                    px-4
                    py-2
                    text-sm
                    hover:text-red-500
                    cursor-pointer
                  "
                >
                  Elements
                </div>

                <div
                  className="
                    px-4
                    py-2
                    text-sm
                    hover:text-red-500
                    cursor-pointer
                  "
                >
                  Confirmation
                </div>

                <NavLink
                  to="/cartList"
                  onClick={closeMobileMenu}
                  className="
                    block
                    px-4
                    py-2
                    text-sm
                    hover:text-red-500
                  "
                >
                  Shopping Cart
                </NavLink>

                <div
                  className="
                    px-4
                    py-2
                    text-sm
                    hover:text-red-500
                    cursor-pointer
                  "
                >
                  Checkout
                </div>
              </div>
            </li>

            {/* CONTACT */}

            <li>
              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className="
                  block
                  px-4
                  py-3
                  rounded-lg
                  hover:bg-red-50
                  hover:text-red-500
                  transition
                "
              >
                Contact
              </NavLink>
            </li>

            {/* MOBILE SIGN IN */}

            <li className="pt-2">
              <Link
                to="/signup"
                onClick={closeMobileMenu}
                className="
                  block
                  bg-blue-700
                  hover:bg-blue-400
                  text-white
                  text-center
                  px-6
                  py-3
                  rounded-full
                  transition
                  duration-300
                "
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
