// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREAMENT, INCREAMENT } from "../redux/slices/cartSlice";

const CartList = () => {
  const dispatch = useDispatch();
  const Items = useSelector((state) => state.cart.cartItems);
  console.log(Items);
  return (
    <>
      <div>
        <div>
          <div
            className="w-full h-70 bg-cover bg-center bg-no-repeat flex items-center justify-center "
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/men-stylish-casual-clothing-accessories-wooden-background_151851-981.jpg)",
            }}
          >
            <h1 className="text-5xl font-bold text-gray-700">
              Card List
            </h1>
          </div>

          <div className="flex flex-col gap-6  p-15">
            {Items.map((value) => (
              <div className="flex w-full  rounded-2xl border-0 shadow-lg p-10 ">
                <div key={value.id} className="w-fit">
                  <img
                    src={value.image}
                    alt=""
                    className="h-75 w-75 object-contain"
                  />
                </div>
                <div className="my-5">
                  <h1 className="text-2xl font-bold px-10">
                    Product Description
                  </h1>
                  <p className="text-lg px-10">{value.description}</p>
                  <h1 className="text-2xl font-bold px-10">Price</h1>
                  <p className="text-xl py-3 px-10 text-pink-500 font-bold">
                    ${(value.price * value.quantity).toFixed(2)}
                  </p>

                  {/* Buttons */}
                  <div className="px-10 mt-6">
                    <div className="flex items-center border border-gray-300 rounded-lg w-fit shadow-sm">
                      <button
                        onClick={() => dispatch(DECREAMENT(value.id))}
                        className="px-4 py-2 text-xl font-bold hover:bg-gray-100 border-r border-gray-300"
                      >
                        −
                      </button>

                      <span className="px-5 py-2 text-lg font-semibold">
                        {value.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(INCREAMENT(value.id))}
                        className="px-4 py-2 text-xl font-bold hover:bg-gray-100 border-l border-gray-300"
                      >
                        +
                      </button>
                    </div>
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

export default CartList;
