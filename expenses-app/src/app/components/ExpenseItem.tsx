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
  handleClickDelete: (id: Number) => void;
};

const ExpenseItem: React.FC<ExpensesItem> = ({ item, handleClickDelete }) => {
  return (
    <tr>
      <th>{item.title}</th>
      <td>{item.amount.toFixed()}</td>
      <td>{item.category}</td>
      <td>{item.date}</td>
      <td>
        <button
          className="btn btn-outline btn-error"
          onClick={() => handleClickDelete(item.id)}
        >
          Usuń
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
