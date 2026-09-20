import React from "react";

const Hero_2 = () => {
  return (
    <>
      <div>
        <div className="mx-20 my-50">
          <div className="bg-[#fceec3f5] w-full h-140 flex justify-evenly items-center relative">
            <div>
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/card-shape.png"
                alt=""
                className="absolute bottom-10 right-10 w-20 h-50 md:w-52 lg:w-64"
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/card-man.png"
                alt=""
                className="h-fit"
              />
            </div>
            <div className="w-180 space-y-7">
              <h1 className="text-6xl font-bold ">
                Find The Best Product from Our Shop
              </h1>
              <h3 className="text-xl text-gray-700">
                Designers who are interesten creating state ofthe.
              </h3>
              <button
                className="bg-black text-white px-10 py-4 rounded-full
             transition-all duration-700
             hover:-translate-y-2
             hover:shadow-lg mt-5"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Section-5 */}
        <div className="w-full flex justify-evenly items-center space-x-2 p-20">
          <div className="w-110 space-y-9">
            <h1 className="font-bold text-6xl">
              Best Collection of This Month
            </h1>
            <h3 className="text-xl text-gray-700">
              Designers who are interesten crea.
            </h3>
            <button className="relative overflow-hidden rounded-full bg-blue-700 px-10 py-4 text-lg text-white transition-all duration-300 group my-10 shadow-lg shadow-blue-500/50">
              <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-400 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Shop Now
              </span>
            </button>
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection1.png"
              alt=""
              className="mt-10"
            />
          </div>
          <div>
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection2.png"
              alt=""
            />
          </div>
          <div>
            <div className="flex space-x-4">
              <div className="w-30 my-10">
                <h1 className="font-semibold text-xl text-right">
                  Menz Winter Jacket
                </h1>
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex space-x-4 my-10 ">
              <div className="w-40 h-22 bg-blue-600 rounded-2xl text-white font-semibold text-xl text-center my-5">
                <h1 className="my-5">Menz Winter Jacket</h1>
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection4.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-30 my-10">
                <h1 className="font-semibold text-xl text-right">
                  Menz Winter Jacket
                </h1>
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* section-6 */}
        
      </div>
    </>
  );
};

export default Hero_2;
