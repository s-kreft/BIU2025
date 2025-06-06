import React from "react";

export type Item = {
  // id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
  description: string;
};

type ExpensesItem = {
  item: Item;
  // handleClickDelete: (id: number) => void;
  handleClickDelete: (id: Item) => void;
  onRowClick: () => void;
};

const ExpenseItem: React.FC<ExpensesItem> = ({
  item,
  handleClickDelete,
  onRowClick,
}) => {
  return (
    <tr onClick={onRowClick} className="cursor-pointer hover:bg-base-200">
      {/* <th>{item.id}</th> */}
      <th>{item.title}</th>
      <td>{item.amount.toFixed()}</td>
      <td>{item.category}</td>
      <td>{item.date}</td>
      <td>
        <button
          className="btn btn-outline btn-error"
          onClick={(e) => {
            e.stopPropagation(); // Prevent row click from firing
            handleClickDelete(item);
          }}
        >
          Usuń
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
