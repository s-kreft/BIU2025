"use client";

import Image from "next/image";
import ExpensesTable from "./components/ExpensesTable";
import { useEffect, useState } from "react";
import { Item } from "./components/ExpenseItem";
import data from "./components/data.json";

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // await fetch("./components/data.json");
    // fetch("./components/data.json").then((response) =>
    //   response.json().then((data) => {
    //     console.log(data);
    //     setItems(data.Items);
    //   })
    // );
    console.log(data);
    setItems(data.Items.map((i) => i as Item));
  }, []);
  return <ExpensesTable expenses={items}></ExpensesTable>;
}
