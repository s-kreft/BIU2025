import React from "react";
import { useFormik } from "formik";
import { Item } from "./ExpenseItem";
import { title } from "process";
import * as Yup from "yup";

// const validationSchema = Yup.object({
//   title: Yup.string().required("Tytuł jest wymagany"),
// });

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
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
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
          {formik.touched.price && formik.errors.price ? (
            <div>{formik.errors.price}</div>
          ) : null}
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
          {formik.touched.category && formik.errors.category ? (
            <div>{formik.errors.category}</div>
          ) : null}
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
          {formik.touched.date && formik.errors.date ? (
            <div>{formik.errors.date}</div>
          ) : null}
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
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-success">
          Dodaj
        </button>
      </form>
    </fieldset>
  );
}
