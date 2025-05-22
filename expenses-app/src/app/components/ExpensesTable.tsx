"use client";

import { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { Item } from "./ExpenseItem";
import data from "./data.json";
import ExpenseDetailModal from "./ExpenseDetailsModal";

const ExpensesTable = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setItems(data.Items.map((i) => i as Item));
  }, []);

  const handleClickDelete = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleRowClick = (item: Item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
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
              onRowClick={() => handleRowClick(item)}
            ></ExpenseItem>
          ))}
        </tbody>
      </table>
      <ExpenseDetailModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ExpensesTable;
