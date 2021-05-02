import React, { useState } from "react";
import Card from "../ui/Card";
import "./Expense.css";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpenseList";

const Expense = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState("2020");

  const onYearChange = (year) => {
    setFilterYear(year);
  };

  const filterExpenses = expenses.filter((item) => {
    return item.date.getFullYear() == filterYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selectedYear={filterYear} onYearChange={onYearChange} />
        <ExpenseChart expenses={filterExpenses} />
        <ExpenseList filterExpenses={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
