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
import { EditExpenseForm } from "./EditExpenseForm";
import { v4 } from "uuid";

const ExpensesTable = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<string>("");
  const [isFormikModalOpen, setIsFormikModalOpen] = useState(false);
  const [isEditExpenseFormClicked, setIsEditExpenseFormClicked] =
    useState(false);

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

  const handleClickEdit = (item: Item) => {
    const newItems = items.map((i) =>
      item.id === i.id ? { ...i, ...item } : i
    );
    setItems(newItems);
    closeModal();
  };

  const handleRowClick = (item: Item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setIsEditExpenseFormClicked(false);
    setIsFormikModalOpen(false);
  };

  const onSubmitNewExpense = (item: Item) => {
    setItems([...items, item]);
  };

  const onEditExpenseClicked = () => {
    setIsEditExpenseFormClicked(true);
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
          className="btn btn-outline btn-success"
          onClick={(e) => {
            setIsFormikModalOpen(true);
            const m = document.getElementById(
              "my_modal_1"
            ) as HTMLDialogElement;
            m?.showModal();
          }}
        >
          Nowy Wydatek
        </button>
        {isFormikModalOpen && (
          <AddExpenseFormModal
            isOpen={isFormikModalOpen}
            onClose={() => closeModal()}
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
                handleClickEdit={() => {
                  setSelectedItem(item);
                  setIsEditExpenseFormClicked(true);
                }}
              ></ExpenseItem>
            ))}
          </tbody>
        </table>
        {isEditExpenseFormClicked && (
          <AddExpenseFormModal
            isOpen={isEditExpenseFormClicked}
            onClose={() => {
              closeModal();
            }}
          >
            <EditExpenseForm
              onEditedExpense={(item) => handleClickEdit(item)}
              editedItem={selectedItem!}
            ></EditExpenseForm>
          </AddExpenseFormModal>
        )}
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
