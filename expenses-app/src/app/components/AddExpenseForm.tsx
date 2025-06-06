import React from "react";
import { useFormik } from "formik";
import { Item } from "./ExpenseItem";
import { title } from "process";

export function AddExpenseForm({
  onSubmitNewExpense,
}: {
  onSubmitNewExpense: (item: Item) => void;
}) {
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      category: "",
      date: "",
      description: "",
    },
    onSubmit: (values) => {
      let item = {
        title: values.title,
        amount: Number(values.price),
        category: values.category,
        date: values.date,
        description: values.description,
      } as Item;
      onSubmitNewExpense(item);
      formik.resetForm();
    },
  });
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <form onSubmit={formik.handleSubmit}>
        {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"> */}
        <div>
          <label htmlFor="title">Tytuł</label>
          <input
            id="title"
            className="input"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>

        <div>
          <label htmlFor="price">Kwota</label>
          <input
            id="price"
            className="input"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </div>

        <div>
          <label htmlFor="category">Kategoria</label>
          <input
            id="category"
            className="input"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
        </div>

        <div>
          <label htmlFor="date">Data</label>
          <input
            id="date"
            className="input"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
        </div>

        <div>
          <label htmlFor="description">Opis</label>
          <input
            id="description"
            className="textarea"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </fieldset>
  );
}
