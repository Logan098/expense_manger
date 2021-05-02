import Card from "./Card";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";

function Expense({ expenses }) {
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

  return <Card className="expenses"> {items}</Card>;
}

export default Expense;
 