import React from "react";
import { useFormik } from "formik";

export const AddExpenseForm = () => {
  const Formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      category: "",
      date: "",
      description: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={Formik.handleSubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <div>
          <label htmlFor="title">Tytuł</label>
          <input
            className="input"
            type="text"
            onChange={Formik.handleChange}
            value={Formik.values.title}
          />
        </div>

        <div>
          <label htmlFor="price">Kwota</label>
          <input
            className="input"
            type="text"
            onChange={Formik.handleChange}
            value={Formik.values.price}
          />
        </div>

        <div>
          <label htmlFor="category">Kategoria</label>
          <input
            className="input"
            type="text"
            onChange={Formik.handleChange}
            value={Formik.values.category}
          />
        </div>

        <div>
          <label htmlFor="date">Data</label>
          <input
            className="input"
            type="date"
            onChange={Formik.handleChange}
            value={Formik.values.date}
          />
        </div>

        <div>
          <label htmlFor="description">Opis</label>
          <input
            className="textarea"
            type="text"
            onChange={Formik.handleChange}
            value={Formik.values.description}
          />
        </div>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};
