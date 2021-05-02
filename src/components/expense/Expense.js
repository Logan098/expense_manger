import React, { useState } from "react";
import Card from "../ui/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expense = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState("2020");
  const items = [];

  for (let i = 0; i < expenses.length; i++) {
    items.push(
      <ExpenseItem
        key={expenses[i].title}
        title={expenses[i].title}
        amount={expenses[i].amount}
        date={expenses[i].date}
      />
    );
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selectedYear={filterYear} onYearChange={setFilterYear} />
        {items}
      </Card>
    </div>
  );
};

export default Expense;
