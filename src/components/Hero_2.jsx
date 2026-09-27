const Hero_2 = () => {
  return (
    <>
      <div className="overflow-hidden">

        {/* ================= HERO SECTION ================= */}
        <div className="mx-20 my-50 max-xl:mx-10 max-lg:mx-5 max-md:mx-3 max-md:my-20">

          <div
            className="
              bg-[#fceec3f5]
              w-full
              h-140
              flex
              justify-evenly
              items-center
              relative
        

              max-xl:gap-5
              max-lg:gap-3
              max-md:flex-col
              max-md:justify-center
              max-md:py-10
            "
          >

            {/* Shape Image */}
            <div className="shrink-0 max-md:absolute max-md:bottom-5 max-md:right-5 max-md:z-0">
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/card-shape.png"
                alt=""
                className="
                  absolute
                  bottom-10
                  right-10
                  w-20
                  h-50
                  md:w-52
                  lg:w-64
                  max-md:opacity-60
                "
              />
            </div>

            {/* Man Image */}
            <div className="shrink-0 relative z-10 max-lg:scale-90 max-md:scale-75">
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/card-man.png"
                alt=""
                className="h-fit"
              />
            </div>

            {/* Text */}
            <div
              className="
                w-180
                space-y-7
                relative
                z-20

                max-xl:scale-90
                max-lg:scale-75
                max-md:scale-100
                max-md:text-center
                max-md:px-5
                max-md:space-y-4
              "
            >

              <h1 className="text-6xl font-bold max-lg:text-3xl max-md:text-2xl mt-2.5 ">
                Find The Best Product from Our Shop
              </h1>

              <h3 className="text-xl text-gray-700 max-md:text-lg">
                Designers who are interesten creating state ofthe.
              </h3>

              <button
                className="
                  bg-black
                  text-white
                  px-10
                  py-4
                  rounded-full
                  transition-all
                  duration-700
                  hover:-translate-y-2
                  hover:shadow-lg
                  mt-5
                "
              >
                Shop Now
              </button>

            </div>
          </div>
        </div>


        {/* ================= SECTION 5 ================= */}
        <div
          className="
            w-full
            flex
            justify-evenly
            items-center
            space-x-2
            p-20

            max-xl:p-10
            max-lg:flex-wrap
            max-lg:gap-10
            max-lg:space-x-0
            max-md:flex-col
            max-md:gap-14
            max-md:p-5
          "
        >

          {/* ================= LEFT ================= */}
          <div
            className="
              w-110
              space-y-9

              max-lg:text-center
              max-md:flex
              max-md:flex-col
              max-md:items-center
            "
          >

            <h1 className="font-bold text-6xl max-lg:text-5xl max-md:text-4xl">
              Best Collection of This Month
            </h1>

            <h3 className="text-xl text-gray-700 max-md:text-lg">
              Designers who are interesten crea.
            </h3>

            <button
              className="
                relative
                overflow-hidden
                rounded-full
                bg-blue-700
                px-10
                py-4
                text-lg
                text-white
                transition-all
                duration-300
                group
                my-10
                shadow-lg
                shadow-blue-500/50
              "
            >

              <span
                className="
                  absolute
                  inset-0
                  origin-left
                  scale-x-0
                  bg-cyan-400
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-x-100
                "
              ></span>

              <span
                className="
                  relative
                  z-10
                  transition-colors
                  duration-300
                  group-hover:text-black
                "
              >
                Shop Now
              </span>

            </button>

            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection1.png"
              alt=""
              className="mt-10"
            />

          </div>


          {/* ================= MIDDLE IMAGE ================= */}
          <div className="shrink-0 max-lg:scale-90 max-md:scale-100">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection2.png"
              alt=""
            />
          </div>


          {/* ================= RIGHT COLLECTION ================= */}
          <div className="shrink-0">

            {/* Collection 3 */}
            <div className="flex space-x-4 items-center max-md:space-x-2">

              <div className="w-30 my-10 max-md:text-center">
                <h1 className="font-semibold text-xl text-right max-md:text-center">
                  Menz Winter Jacket
                </h1>
              </div>

              <div className="shrink-0">
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection3.png"
                  alt=""
                />
              </div>

            </div>


            {/* Collection 4 */}
            <div className="flex space-x-4 my-10 items-center max-md:space-x-2">

              <div
                className="
                  w-40
                  h-22
                  bg-blue-600
                  rounded-2xl
                  text-white
                  font-semibold
                  text-xl
                  text-center
                  my-5

                  max-md:text-lg
                "
              >
                <h1 className="my-5">
                  Menz Winter Jacket
                </h1>
              </div>

              <div className="shrink-0">
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection4.png"
                  alt=""
                />
              </div>

            </div>


            {/* Collection 5 */}
            <div className="flex space-x-4 items-center max-md:space-x-2">

              <div className="w-30 my-10">
                <h1 className="font-semibold text-xl text-right max-md:text-center">
                  Menz Winter Jacket
                </h1>
              </div>

              <div className="shrink-0">
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection5.png"
                  alt=""
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default Hero_2;

