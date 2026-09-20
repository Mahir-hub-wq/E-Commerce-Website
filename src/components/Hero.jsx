// import React from "react";

const Hero = () => {
  return (
    <>
      <div>
        <div className="bg-[#9cd9e3f7] w-full h-screen flex justify-evenly items-center">
          {/* Image */}
          <div>
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png"
              alt=""
              className="h-screen"
            />
          </div>

          {/* Text + Button */}
          <div className="flex flex-col space-y-6">
            <div className="text-black max-w-xl space-y-4">
              <h1 className="italic text-blue-700 font-bold text-5xl">
                60% Discount
              </h1>

              <h1 className="text-8xl font-bold">Winter Collections</h1>

              <h1 className="italic text-2xl">
                Both clothes collections by 2026
              </h1>
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition w-fit">
              Shop Now
            </button>
          </div>
        </div>

        <div className="my-50">
          <div className="text-6xl font-bold text-center ">
            <h1>Shop by Category</h1>
          </div>
          <div className="flex flex-wrap justify-evenly items-center my-30 ">
            <div className="w-110 h-70 rounded-xl  flex justify-between items-center bg-[url('https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg')] bg-cover bg-center">
              <div>
                {/* <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg"
                  alt=""  
                  className=" "  
                /> */}
              </div>

              <div className="pl-5 text-center pr-3.5">
                <h1 className="text-xl font-bold">Woman's</h1>
                <div className="">
                  <h1 className="text-lg font-bold bg-amber-300 rounded-3xl">Best new deal</h1>
                </div>
                <h1 className="italic text-blue-600 text-2xl">
                  New Collections
                </h1>
              </div>
            </div>
            <div className=" w-110 h-70 rounded-xl flex justify-between items-center bg-[url('https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg')] bg-cover bg-center ">
              <div >
                {/* <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg"
                  alt=""
                  className="h-fit w-fit"
                /> */}
              </div>
              <div className="pl-5 text-center pr-4.5">
                 <h1 className="text-2xl font-bold text-blue-600 italic">Discount</h1>
                <div className="">
                  <h1 className="text-xl bg-amber-400 rounded-2xl font-bold">Winter Cloth's</h1>
                </div>
                <h1 className="italic text-lg">
                  New Collections
                </h1>
              </div>
            </div>
            <div className="w-110 h-70 rounded-xl flex justify-between items-center bg-[url('https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg')] bg-cover bg-center">
              <div>
                {/* <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg"
                  alt=""
                /> */}
              </div>
             <div className="pl-5 text-center pr-3.5">
                 <h1 className="text-xl font-bold">Men's Clothes</h1>
                <div className="">
                  <h1 className="text-lg bg-amber-400 rounded-3xl font-bold">Best new deal</h1>
                </div>
                <h1 className="italic text-blue-600 text-2xl">
                  New Collections
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
