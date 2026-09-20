// import React from "react";

const Hero_3 = () => {
  return (
    <>
      <div className="m-20">
        <div className="relative w-full h-100 bg-[#d1f5faf2] rounded-2xl overflow-hidden">
          {/* Left Side White Dots */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 grid grid-cols-8 gap-5">
            {Array.from({ length: 1000 }).map((_, index) => (
              <div key={index} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>

          {/* Left Content */}
          <div className="flex">
            <div className="mx-40 my-25 w-110 space-y-9">
              <h1 className="font-bold text-5xl text-left">
                Get Our <br />
                Latest Offers News
              </h1>
              <h3 className="text-2xl text-gray-700 ">Subscribe news latter</h3>
            </div>

            {/* Right Content */}
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Your Email Here"
                className="flex-1 h-14 rounded-full border border-gray-300 bg-white px-6 outline-none focus:ring-2 focus:ring-cyan-400 text-xl"
              />

              <button className="h-14 px-8 rounded-full bg-blue-700 text-white font-semibold hover:bg-cyan-500 transition-all duration-300 text-xl">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section-7 */}
      <div className="flex justify-evenly items-center flex-wrap my-50">
        <div className="w-70 h-70 rounded-2xl space-y-5 ">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2630/2630085.png"
            alt=""
            className="w-15 h-15"
          />

          <h1 className="font-semibold text-2xl ">Free Shipping Method</h1>

          <h3 className="text-xl text-gray-800">
            aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
          </h3>
        </div>
        <div className="w-70 h-70 rounded-2xl space-y-5">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2889/2889676.png"
            alt=""
            className="w-15 h-15"
          />

          <h1 className="font-semibold text-2xl ">Secure Payment System</h1>

          <h3 className="text-xl text-gray-800">
            aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
          </h3>
        </div>
        <div className="w-70 h-70 rounded-2xl space-y-5">
          <img
            src="https://cdn-icons-png.flaticon.com/128/13174/13174844.png"
            alt=""
            className="w-15 h-15"
          />

          <h1 className="font-semibold text-2xl ">Secure Payment System</h1>

          <h3 className="text-xl text-gray-800">
            aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
          </h3>
        </div>
      </div>

      {/* section-5 */}
      <div className="flex justify-center">
        <div>
          <img
            src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery1.jpg"
            alt=""
            className="w-70 h-80"
          />
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery2.jpg"
            alt=""
            className="w-70 h-80"
          />
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery3.jpg"
            alt=""
            className="w-70 h-80"
          />
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery4.jpg"
            alt=""
            className="w-70 h-80"
          />
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery5.jpg"
            alt=""
            className="w-70 h-80"
          />
        </div>
      </div>
    </>
  );
};

export default Hero_3;
