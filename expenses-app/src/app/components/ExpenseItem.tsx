import React from "react";

export type Item = {
  id: Number;
  title: String;
  amount: Number;
  category: String;
  date: String;
  description: String;
};

type ExpensesItem = {
  item: Item;
};

const ExpenseItem: React.FC<ExpensesItem> = ({ item }) => {
  return (
    <tr>
      <th>{item.title}</th>
      <td>{item.amount.toFixed()}</td>
      <td>{item.category}</td>
      <td>{item.date}</td>
    </tr>
  );
};

export default ExpenseItem;
