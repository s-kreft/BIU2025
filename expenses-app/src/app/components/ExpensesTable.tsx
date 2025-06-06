"use client";

import { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { Item } from "./ExpenseItem";
import { FilterData } from "./FilterPanel";
import data from "./data.json";
import ExpenseDetailModal from "./ExpenseDetailsModal";
import FilterPanel from "./FilterPanel";
import { AddExpenseFormModal } from "./AddExpenseFormModal";
import { AddExpenseForm } from "./AddExpenseForm";

const ExpensesTable = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<string>("");
  const [isFormikModalOpen, setIsFormikModalOpen] = useState(false);

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

  // const handleClickDelete = (id: number) => {
  //   setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  // };
  const handleClickDelete = (id: Item) => {
    setItems((prevItems) => prevItems.filter((item) => item !== id));
  };

  const handleRowClick = (item: Item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const onSubmitNewExpense = (item: Item) => {
    setItems([...items, item]);
  };

  return (
    <div>
      <div>
        <FilterPanel
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
        ></FilterPanel>
      </div>
      <div>
        <button
          className="btn btn-outline btn-info"
          onClick={(e) => {
            setIsFormikModalOpen(true);
            const m = document.getElementById(
              "my_modal_1"
            ) as HTMLDialogElement;
            m?.showModal();
          }}
        >
          Formik Modal
        </button>
        {isFormikModalOpen && (
          <AddExpenseFormModal
            isOpen={isFormikModalOpen}
            onClose={() => setIsFormikModalOpen(false)}
          >
            <AddExpenseForm
              onSubmitNewExpense={(item) => onSubmitNewExpense(item)}
            ></AddExpenseForm>
          </AddExpenseFormModal>
        )}
      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
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
