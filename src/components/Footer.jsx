const Footer = () => {
  return (
    <>
      {" "}
      {/* ===================================================== FOOTER MAIN SECTION ===================================================== */}{" "}
      <div className=" max-w-7xl mx-auto mt-20 sm:mt-24 lg:mt-32 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-12 ">
        {" "}
        {/* ================= ESTORE ================= */}{" "}
        <div className="space-y-5">
          {" "}
          <h1 className=" text-3xl sm:text-4xl font-bold text-gray-600 ">
            {" "}
            Estore{" "}
          </h1>{" "}
          <p className=" text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-md ">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore.{" "}
          </p>{" "}
        </div>{" "}
        {/* ================= QUICK LINKS ================= */}{" "}
        <div className="space-y-5">
          {" "}
          <h3 className=" text-xl sm:text-2xl font-semibold ">
            {" "}
            Quick Links{" "}
          </h3>{" "}
          <ul className=" text-gray-400 text-base sm:text-lg lg:text-xl space-y-3 ">
            {" "}
            <li className="hover:text-red-500 cursor-pointer transition">
              {" "}
              About{" "}
            </li>{" "}
            <li className="hover:text-red-500 cursor-pointer transition">
              {" "}
              Offers & Discounts{" "}
            </li>{" "}
            <li className="hover:text-red-500 cursor-pointer transition">
              {" "}
              Get Coupon{" "}
            </li>{" "}
            <li className="hover:text-red-500 cursor-pointer transition">
              {" "}
              Contact Us{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        {/* ================= NEW PRODUCTS ================= */}{" "}
        <div className="space-y-5">
          {" "}
          <h3 className=" text-xl sm:text-2xl font-semibold ">
            {" "}
            New Products{" "}
          </h3>{" "}
          <ul className=" text-gray-400 text-base sm:text-lg lg:text-xl space-y-3 ">
            {" "}
            <li className="hover:text-red-500 cursor-pointer transition">
              {" "}
              Woman Clothes{" "}
            </li>{" "}
            <li className="hover:text-red-500 cursor-pointer transition">
              {" "}
              Fashion Accessories{" "}
            </li>{" "}
            <li className="hover:text-red-500 cursor-pointer transition">
              {" "}
              Man Accessories{" "}
            </li>{" "}
            <li className="hover:text-red-500 cursor-pointer transition">
              {" "}
              Rubber Made Toys{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        {/* ================= SUPPORT ================= */}{" "}
        <div className="space-y-5">
          {" "}
          <h3 className=" text-xl sm:text-2xl font-semibold ">
            {" "}
            Supports{" "}
          </h3>{" "}
          <ul className=" text-gray-400 text-base sm:text-lg lg:text-xl space-y-3 ">
            {" "}
            <li className="hover:text-red-500 cursor-pointer transition">
              {" "}
              Frequently Asked Questions{" "}
            </li>{" "}
            <li className="hover:text-red-500 cursor-pointer transition">
              {" "}
              Terms & Conditions{" "}
            </li>{" "}
            <li className="hover:text-red-500 cursor-pointer transition">
              {" "}
              Privacy & Policy{" "}
            </li>{" "}
            <li className="hover:text-red-500 cursor-pointer transition">
              {" "}
              Report a Payment issue{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
      {/* ===================================================== FOOTER BOTTOM SECTION ===================================================== */}{" "}
      <div className=" max-w-7xl mx-auto mt-12 lg:mt-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 py-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-5 ">
        {" "}
        {/* ================= COPYRIGHT ================= */}{" "}
        <div className="text-center md:text-left">
          {" "}
          <p className=" text-sm sm:text-base lg:text-lg text-gray-500 ">
            {" "}
            Copyright ©2026 All rights reserved |{" "}
          </p>{" "}
        </div>{" "}
        {/* ================= SOCIAL ICONS ================= */}{" "}
        <div className=" flex items-center justify-center gap-5 ">
          {" "}
          {/* Instagram */}{" "}
          <div className="cursor-pointer hover:scale-110 transition duration-300">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733635.png"
              alt="Instagram"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />{" "}
          </div>{" "}
          {/* Facebook */}{" "}
          <div className="cursor-pointer hover:scale-110 transition duration-300">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
              alt="Facebook"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />{" "}
          </div>{" "}
          {/* Twitter */}{" "}
          <div className="cursor-pointer hover:scale-110 transition duration-300">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/9834/9834654.png"
              alt="Twitter"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default Footer;
