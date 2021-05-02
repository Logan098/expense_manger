import React, {useState} from 'react'
import Expense from "./components/expense/Expense";
import NewExpense from './components/newExpense/NewExpense';

const  App = () => {
  const [expenses, setExpenses] = useState([])

  return (
    <div>
      <NewExpense setExpenses={setExpenses} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
