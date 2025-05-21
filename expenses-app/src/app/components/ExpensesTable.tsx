"use client";

import { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { Item } from "./ExpenseItem";
import data from "./data.json";

const ExpensesTable = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(data.Items.map((i) => i as Item));
  }, []);

  const handleClickDelete = (id: Number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Tytuł</th>
            <th>Kwota</th>
            <th>Kategoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {items.map((item, index) => (
            <ExpenseItem
              key={index}
              item={item}
              handleClickDelete={handleClickDelete}
            ></ExpenseItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;
