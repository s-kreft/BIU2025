"use client";

import { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { Item } from "./ExpenseItem";
import { FilterData } from "./FilterPanel";
import data from "./data.json";
import ExpenseDetailModal from "./ExpenseDetailsModal";
import FilterPanel from "./FilterPanel";

const ExpensesTable = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<string>("");

  useEffect(() => {
    const loadedItems = data.Items.map((i) => i as Item);
    setItems(loadedItems);
    setFilteredItems(loadedItems);
  }, []);

  useEffect(() => {
    const filtered = items.filter((item) => {
      const matchCategory =
        categoryFilter === "" || item.category === categoryFilter;
      const matchDate = dateFilter === "" || item.date === dateFilter;
      return matchCategory && matchDate;
    });
    setFilteredItems(filtered);
  }, [categoryFilter, dateFilter, items]);

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
    <div>
      <div>
        <FilterPanel
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        ></FilterPanel>
      </div>
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
            {filteredItems.map((item, index) => (
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
    </div>
  );
};

export default ExpensesTable;
