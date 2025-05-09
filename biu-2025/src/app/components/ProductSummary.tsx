import React from "react";

type Product = {
  name: string;
  price: string;
  description: string;
  available: boolean;
  discount: number;
};

type ProductList = {
  products: Product[];
};

const ProductSummary: React.FC<ProductList> = ({ products }) => {
  const availableItems = products.filter((product) => product.available);
  const itemsPriceSum = availableItems.reduce((sum, product) => {
    const itemPrice = parseFloat(product.price);
    return sum + itemPrice;
  }, 0);
  return (
    <div className="w-1/2 mx-auto bg-gray-100">
      <p>Liczba dostępnych produktów: {availableItems.length}</p>
      <p>Sumaryczna wartość produktów: {itemsPriceSum.toFixed(2)} PLN</p>
    </div>
  );
};

export default ProductSummary;
