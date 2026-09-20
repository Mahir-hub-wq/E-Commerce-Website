// import React from "react";
import { useEffect } from "react";
// import {API, getData} from "../services/api"
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productslice";
import Rating from "../components/Rating";
import Button from "./Button";
import { AddToCart } from "../redux/slices/cartSlice";

const ProductCard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(products);
  console.log(products);

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
        <div className="px-50 mt-20">
          <div className="flex flex-wrap justify-between border-b py-5">
            <h1 className="font-bold text-5xl">Latest Products</h1>
            <ul className="flex justify-around items-center gap-8">
              <li className="text-lg text-gray-700 hover:text-pink-500">All</li>
              <li className="text-lg text-gray-700 hover:text-pink-500">New</li>
              <li className="text-lg text-gray-700 hover:text-pink-500">
                Featured
              </li>
              <li className="text-lg text-gray-700 hover:text-pink-500">
                Offer
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-20 py-18">
          <div className="flex flex-wrap justify-evenly gap-10">
            {products.slice(0, 6).map((value) => (
              <div key={value.id} className="w-90 rounded-lg  p-4 bg-gray-100">
                <Button text="New" className="bg-red-500 text-white" />
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-72 object-contain"
                />
                <Rating
                  className="flex flex-col items-center"
                  rating={value.rating.rate}
                  reviews={value.rating.count}
                />
                <p className="text-sm text-center text-gray-500 my-5">
                  {value.title}
                </p>
                <div className="flex justify-around items-center py-10">
                  <h1 className="text-xl font-bold ">${value.price}</h1>

                  <h1 className="line-through text-pink-500 text-xl font-bold">
                    $60.5
                  </h1>

                  <div>
                    <button
                      onClick={() => dispatch(AddToCart(value))}
                      className="w-full px-3 py-3 font-bold rounded-2xl bg-blue-500 hover:bg-blue-400 text-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    // onClick={() => dispatch(AddToCart(value))}
                    className="w-full px-3 py-3 font-bold rounded-2xl bg-blue-500 hover:bg-blue-400 text-white"
                  >
                    View Product Details
                 </button>
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
