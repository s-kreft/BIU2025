"use client";

import React, { useRef } from "react";
import {
  AddExpenseFormModal,
  AddExpenseFormModalProps,
} from "./components/AddExpenseFormModal";
import ExpensesTable from "./components/ExpensesTable";

export default function Home() {
  return (
    <div>
      <ExpensesTable></ExpensesTable>
    </div>
  );
}
