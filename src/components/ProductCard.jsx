
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import Rating from "../components/Rating";
import Button from "./Button";
import { AddToCart } from "../redux/slices/cartSlice";
import { ShoppingCart } from "lucide-react";

const ProductCard = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Always 2 product in Cart
  useEffect(() => {
    if (products.length >= 2 && cartItems.length === 0) {
      dispatch(AddToCart(products[0]));
      dispatch(AddToCart(products[1]));
    }
  }, [products, cartItems, dispatch]);

  return (
    <>
      <div>

        {/* Header */}
        <div className="px-50 mt-20 max-sm:px-5 max-sm:mt-10">
          <div className="flex flex-wrap justify-between border-b py-5 gap-5">

            <h1 className="font-bold text-5xl max-sm:text-3xl">
              Latest Products
            </h1>

            <ul className="flex justify-around items-center gap-8 max-sm:gap-4 max-sm:flex-wrap">
              <li className="text-lg text-gray-700 hover:text-pink-500 max-sm:text-base">
                All
              </li>

              <li className="text-lg text-gray-700 hover:text-pink-500 max-sm:text-base">
                New
              </li>

              <li className="text-lg text-gray-700 hover:text-pink-500 max-sm:text-base">
                Featured
              </li>

              <li className="text-lg text-gray-700 hover:text-pink-500 max-sm:text-base">
                Offer
              </li>
            </ul>

          </div>
        </div>

        {/* Products */}
        <div className="mx-20 py-18 max-sm:mx-5 max-sm:py-10">
          <div className="flex flex-wrap justify-evenly gap-10">

            {products.slice(0, 6).map((value) => (

              <div
                key={value.id}
                className="w-90"
              >

                {/* Image Box */}
                <div className="rounded-lg p-4 bg-gray-100">

                  <Button
                    text="New"
                    className="bg-red-500 text-white"
                  />

                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-72 object-contain"
                  />

                </div>

                {/* Rating */}
                <Rating
                  className="flex flex-col items-center"
                  rating={value.rating.rate}
                  reviews={value.rating.count}
                />

                {/* Title */}
                <div>
                  <p className="text-lg text-center my-5 max-sm:text-base">
                    {value.title}
                  </p>
                </div>

                {/* Price */}
                <div className="flex flex-col items-center px-5 gap-4">

                  <div className="flex justify-around items-center w-full max-sm:flex-wrap max-sm:gap-3">

                    <h1 className="text-2xl font-bold max-sm:text-xl">
                      ${value.price}
                    </h1>

                    <h1 className="line-through text-[#ff003c] text-2xl font-semibold max-sm:text-xl">
                      $60.5
                    </h1>

                    <Button
                      text="Buy"
                      className="bg-yellow-400 hover:bg-amber-600 text-white font-bold"
                    />

                  </div>

                  {/* Add To Cart */}
                  <div className="w-full">

                    <button
                      onClick={() => dispatch(AddToCart(value))}
                      className="
                        w-full
                        px-3
                        py-3
                        font-bold
                        rounded-2xl
                        bg-sky-400
                        hover:bg-sky-600
                        text-lg
                        text-white
                        flex
                        items-center
                        justify-center
                        gap-2
                        max-sm:text-base
                      "
                    >

                      <ShoppingCart
                        size={22}
                        strokeWidth={2.5}
                      />

                      <span>Add to Cart</span>

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        </div>

      </div>
    </>
  );
};

export default ProductCard;
