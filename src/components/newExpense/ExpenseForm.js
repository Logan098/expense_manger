import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseFrom = ({onNewExpense,onCancelHandler}) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  
  // const [userExpense, setUserExpense] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
    // setUserExpense((prevState) => {
    //   return {
    //     ...prevState,
    //     title: event.target.value,
    //   };
    // });
  }

  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
    // setUserExpense((prevState) => {
    //   return {
    //     ...prevState,
    //     amount: event.target.value,
    //   };
    // });
  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value)
    // setUserExpense((prevState) => {
    //   return {
    //     ...prevState,
    //     date: event.target.value,
    //   };
    // });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      id: Math.random().toString(),
      title,
      amount : +amount,
      date: new Date(date)
    }
    onNewExpense(expenseData)

    setTitle("")
    setAmount("")
    setDate("")


  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountChangeHandler} min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>

      </div>
    </form>
  );
};

export default ExpenseFrom;
