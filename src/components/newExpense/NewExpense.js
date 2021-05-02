import React, { useState } from "react";
import ExpenseFrom from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm.css";

const NewExpense = ({ setExpenses }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const onNewExpense = (newExpense) => {
    setExpenses((prevState) => {
      return [...prevState, newExpense];
    });
  };

  const onFormVisibleChangeHandler = () => {
    setIsFormVisible((c) => !c);
  };

  return (
    <div className="new-expense">
      {isFormVisible ? (
        <ExpenseFrom
          onCancelHandler={onFormVisibleChangeHandler}
          onNewExpense={onNewExpense}
        />
      ) : (
        <div className="new-expense__actions">
          <button onClick={onFormVisibleChangeHandler}>Add Expense</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
