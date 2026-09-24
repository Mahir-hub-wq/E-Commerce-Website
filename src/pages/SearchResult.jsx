import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const products = useSelector((state) => state.products.items);

  const filteredProducts = products.filter((product) => {
    const searchText = query.toLowerCase();

    return (
      product.title.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">Search Results</h1>

      <p className="text-gray-500 mb-8">Results for "{query}"</p>

      {filteredProducts.length > 0 ? (
        <>
          <p className="mb-5 text-gray-600">
            {filteredProducts.length} products found
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-5">🔍</div>

          <h2 className="text-2xl font-semibold">No products found</h2>

          <p className="text-gray-500 mt-2">
            Try searching with a different keyword.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
