import React, { useState } from "react";
import { Item, categories } from "./ExpenseItem";

export function EditExpenseForm({
  onEditedExpense,
  editedItem,
}: {
  onEditedExpense: (item: Item) => void;
  editedItem: Item;
}) {
  const [title, setTitle] = useState(editedItem.title);
  const [price, setPrice] = useState(editedItem.amount);
  const [category, setCategory] = useState(editedItem.category);
  const [date, setDate] = useState(editedItem.date);
  const [description, setDescription] = useState(editedItem.description);

  const [errors, setErrors] = useState({
    title: "",
    price: "",
    category: "",
    date: "",
    description: "",
  });

  const validate = () => {
    let valid = true;
    let newErrors = {
      title: "",
      price: "",
      category: "",
      date: "",
      description: "",
    };

    if (!title || title.length < 3) {
      newErrors.title = "Tytuł jest wymagany i musi mieć co najmniej 3 znaki";
      valid = false;
    }
    if (!price || isNaN(Number(price)) || Number(price) <= 0) {
      newErrors.price = "Kwota musi być dodatnia";
      valid = false;
    }
    if (!category || !categories.includes(category)) {
      newErrors.category = "Kategoria jest wymagana";
      valid = false;
    }
    if (!date) {
      newErrors.date = "Data jest wymagana";
      valid = false;
    }
    if (!description) {
      newErrors.description = "Opis jest wymagany";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const item: Item = {
      id: editedItem.id,
      title,
      amount: Number(price),
      category,
      date,
      description,
    };
    onEditedExpense(item);
    // Optionally reset fields here
  };

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Tytuł</label>
          <input
            id="title"
            className="input"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
              validate();
            }}
            value={title}
          />
          <div>{errors.title}</div>
        </div>

        <div>
          <label htmlFor="price">Kwota</label>
          <input
            id="price"
            className="input"
            type="number"
            onChange={(e) => {
              setPrice(Number(e.target.value));
              validate();
            }}
            value={price}
          />
          <div>{errors.price}</div>
        </div>

        <div>
          <label htmlFor="category">Kategoria</label>
          <select
            id="category"
            name="category"
            onChange={(e) => {
              setCategory(e.target.value);
              validate();
            }}
            value={category}
            className="select select-bordered w-full"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div>{errors.category}</div>
        </div>

        <div>
          <label htmlFor="date">Data</label>
          <input
            id="date"
            className="input"
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
              validate();
            }}
            value={date}
          />
          <div>{errors.date}</div>
        </div>

        <div>
          <label htmlFor="description">Opis</label>
          <input
            id="description"
            className="textarea"
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
              validate();
            }}
            value={description}
          />
          <div>{errors.description}</div>
        </div>
        <button type="submit" className="btn btn-success">
          Zapisz
        </button>
      </form>
    </fieldset>
  );
}
