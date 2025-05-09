import React from "react";

type Product = {
  name: string;
  price: string;
  description: string;
  available: boolean;
  discount: number;
};

type ShoppingItem = {
  product: Product;
};

const ProductInfo: React.FC<ShoppingItem> = ({ product }) => {
  const productPrice = parseFloat(product.price);
  const discountPrice = productPrice * ((100 - product.discount) / 100);

  const buyButton = () => {
    return alert(`Kupiono ${product.name} za ${discountPrice.toFixed} PLN`);
  };

  return (
    <div className="border-2 border-blue-500 rounded-lg">
      <div className="product" data-available={product.available}>
        <h2 className="product-name font-bold">{product.name}</h2>
        <p className="product-price">
          {product.price} PLN
          {product.discount > 0 && (
            <> (Promocja {discountPrice.toFixed(2)} PLN)</>
          )}
        </p>
        <p className="opis-produktu">{product.description}</p>
        <p className="product-available">
          {product.available ? "Produkt Dostępny" : "Produkt Niedostępny"}
        </p>
        <p>
          {product.available && (
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={buyButton}
            >
              Kup teraz
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
