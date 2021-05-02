import React from "react";
import ExpenseFrom from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ setExpenses }) => {
  const onNewExpense = (newExpense) => {
    setExpenses((prevState) => {
      return [...prevState, newExpense];
    });
  };

  return (
    <div className="new-expense">
      <ExpenseFrom onNewExpense={onNewExpense} />
    </div>
  );
};

export default NewExpense;
