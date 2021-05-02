import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ filterExpenses }) => {
  if (filterExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {filterExpenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
