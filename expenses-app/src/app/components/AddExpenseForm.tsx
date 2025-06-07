import React from "react";
import { useFormik } from "formik";
import { Item } from "./ExpenseItem";
import { title } from "process";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { Formik } from "formik";

// const validationSchema = Yup.object({
//   title: Yup.string().required("Tytuł jest wymagany"),
// });

export function AddExpenseForm({
  onSubmitNewExpense,
}: {
  onSubmitNewExpense: (item: Item) => void;
}) {
  const formik = useFormik({
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      title: "",
      price: "",
      category: "",
      date: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().min(3).required("Tytył jest wymagany"),
      price: Yup.number()
        .positive("Kwota musi być dodatnia")
        .required("Kwota jest wymagana"),
      category: Yup.string().required("Kategoria jest wymagana"),
      date: Yup.date().required("Data jest wymagana"),
      description: Yup.string().required("Opis jest wymagany"),
    }),
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
          <div>{formik.errors.title}</div>
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
          <div>{formik.errors.price}</div>
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
          <div>{formik.errors.category}</div>
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
          <div>{formik.errors.date}</div>
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
          <div>{formik.errors.description}</div>
        </div>
        <button type="submit" className="btn btn-success">
          Dodaj
        </button>
      </form>
    </fieldset>
  );
}
