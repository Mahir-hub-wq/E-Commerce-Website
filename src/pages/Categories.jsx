import ProductCard from "../components/ProductCard";

import Hero_3 from "../components/Hero_3";

const Categories = () => {
  return (
    <>
      <div>
        <div
          className="w-full h-70 bg-cover bg-center bg-no-repeat flex items-center justify-center "
          style={{
            backgroundImage:
              "url(https://img.freepik.com/premium-photo/men-stylish-casual-clothing-accessories-wooden-background_151851-981.jpg)",
          }}
        >
          <h1 className="text-5xl font-bold text-gray-700">
            Product Categories
          </h1>
        </div>

        <ProductCard />
        <Hero_3 />
      </div>
    </>
  );
};

export default Categories;
