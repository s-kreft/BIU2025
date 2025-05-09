import ProductInfo from "./ProductInfo";
import ProductSummary from "./ProductSummary";

type Product = {
  name: string;
  price: string;
  description: string;
  available: boolean;
  discount: number;
};

type ProductTable = {
  products: Product[];
};

const ProductCatalog: React.FC<ProductTable> = ({ products }) => {
  const availableFilter = () => {
    const allProducts = document.querySelectorAll<HTMLElement>(".product");
    allProducts.forEach((element) => {
      if (element.dataset.available === "false") {
        element.style.display = "none";
      }
    });
  };
  return (
    <div>
      <div>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={availableFilter}
        >
          Filtr
        </button>
      </div>
      <div>
        <ProductSummary products={products}></ProductSummary>
      </div>
      <div>
        {products.map((product, index) => (
          <ProductInfo key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
