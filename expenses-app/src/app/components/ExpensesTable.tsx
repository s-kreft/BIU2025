"use client";

import { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { Item } from "./ExpenseItem";

type ItemsTable = {
  expenses: Item[];
};

const ExpensesTable: React.FC<ItemsTable> = ({ expenses }) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

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
          {expenses.map((item, index) => (
            <ExpenseItem key={index} item={item}></ExpenseItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;
