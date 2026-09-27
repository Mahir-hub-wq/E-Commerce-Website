const Hero = () => {
  return (
    <>
      <div>

        {/* ================= HERO SECTION ================= */}
        <div className="bg-[#9cd9e3f7] w-full h-screen flex justify-evenly items-center max-md:flex-col max-md:justify-center max-md:gap-8 max-md:px-5">

          {/* Image */}
          <div>
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png"
              alt=""
              className="h-screen max-md:h-auto max-md:max-h-[50vh]"
            />
          </div>

          {/* Text + Button */}
          <div className="flex flex-col space-y-6 max-md:items-center max-md:text-center max-md:space-y-4">

            <div className="text-black max-w-xl space-y-4 max-md:space-y-2">

              <h1 className="italic text-blue-700 font-bold text-5xl max-md:text-3xl">
                60% Discount
              </h1>

              <h1 className="text-8xl font-bold max-md:text-5xl">
                Winter Collections
              </h1>

              <h1 className="italic text-2xl max-md:text-lg">
                Both clothes collections by 2026
              </h1>

            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition w-fit">
              Shop Now
            </button>

          </div>
        </div>


        {/* ================= SHOP BY CATEGORY ================= */}
        <div className="my-50 max-md:my-20">

          <div className="text-6xl font-bold text-center max-md:text-4xl">
            <h1>Shop by Category</h1>
          </div>

          <div className="flex flex-wrap justify-evenly items-center my-30 max-md:my-15 max-md:gap-8">

            {/* ================= CATEGORY 1 ================= */}
            <div className="w-110 h-70 rounded-xl flex justify-between items-center bg-[url('https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg')] bg-cover bg-center">

              <div></div>

              <div className="pl-5 text-center pr-3.5 max-md:pl-3 max-md:pr-3">

                <h1 className="text-xl font-bold max-md:text-lg">
                  Woman's
                </h1>

                <div>
                  <h1 className="text-lg font-bold bg-amber-300 rounded-3xl max-md:text-base">
                    Best new deal
                  </h1>
                </div>

                <h1 className="italic text-blue-600 text-2xl max-md:text-xl">
                  New Collections
                </h1>

              </div>
            </div>


            {/* ================= CATEGORY 2 ================= */}
            <div className="w-110 h-70 rounded-xl flex justify-between items-center bg-[url('https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg')] bg-cover bg-center">

              <div></div>

              <div className="pl-5 text-center pr-4.5 max-md:pl-3 max-md:pr-3">

                <h1 className="text-2xl font-bold text-blue-600 italic max-md:text-xl">
                  Discount
                </h1>

                <div>
                  <h1 className="text-xl bg-amber-400 rounded-2xl font-bold max-md:text-lg">
                    Winter Cloth's
                  </h1>
                </div>

                <h1 className="italic text-lg max-md:text-base">
                  New Collections
                </h1>

              </div>
            </div>


            {/* ================= CATEGORY 3 ================= */}
            <div className="w-110 h-70 rounded-xl flex justify-between items-center bg-[url('https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg')] bg-cover bg-center">

              <div></div>

              <div className="pl-5 text-center pr-3.5 max-md:pl-3 max-md:pr-3">

                <h1 className="text-xl font-bold max-md:text-lg">
                  Men's Clothes
                </h1>

                <div>
                  <h1 className="text-lg bg-amber-400 rounded-3xl font-bold max-md:text-base">
                    Best new deal
                  </h1>
                </div>

                <h1 className="italic text-blue-600 text-2xl max-md:text-xl">
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

