"use client";
import Image from "next/image";
import ProductCatalog from "./components/ProductCatalog";

const sampleProducts = [
  {
    name: "Laptop",
    price: "4999",
    description: "Szybki laptop z 16GB RAM.",
    available: true,
    discount: 10,
  },
  {
    name: "Smartfon",
    price: "2999",
    description: "Nowoczesny smartfon z ekranem OLED.",
    available: false,
    discount: 0,
  },
  {
    name: "Tablet",
    price: "1999",
    description: "Lekki tablet idealny do pracy i zabawy.",
    available: true,
    discount: 5,
  },
  {
    name: "Monitor",
    price: "1499",
    description: "Monitor 24-inch 1080p z szybkim czasem reakcji.",
    available: false,
    discount: 15,
  },
  {
    name: "Słuchawki",
    price: "399",
    description: "Bezprzewodowe słuchawki z redukcją szumów.",
    available: false,
    discount: 20,
  },
  {
    name: "Mysz",
    price: "99",
    description: "Ergonomiczna myszka gamingowa z podświetleniem.",
    available: true,
    discount: 0,
  },
  {
    name: "Kamera",
    price: "899",
    description: "Kamera sportowa wodoodporna 4K.",
    available: true,
    discount: 25,
  },
  {
    name: "Głośniki",
    price: "499",
    description: "Bezprzewodowe głośniki Bluetooth z dużym basem.",
    available: false,
    discount: 10,
  },
  {
    name: "Klawiatura",
    price: "249",
    description: "Klawiatura mechaniczna RGB z przełącznikami Cherry MX.",
    available: true,
    discount: 30,
  },
  {
    name: "Powerbank",
    price: "119",
    description: "Powerbank 10000mAh z szybkim ładowaniem.",
    available: true,
    discount: 0,
  },
];

export default function Home() {
  return <ProductCatalog products={sampleProducts}></ProductCatalog>;
}
