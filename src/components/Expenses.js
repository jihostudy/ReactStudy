//Style
import "./Expenses.css";

//Module
import ExpenseItem from "./ExpenseItem";

//
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenseData[0].title}
        amount={props.expenseData[0].amount}
        date={props.expenseData[0].date}
      />
      <ExpenseItem
        title={props.expenseData[1].title}
        amount={props.expenseData[1].amount}
        date={props.expenseData[1].date}
      />
      <ExpenseItem
        title={props.expenseData[2].title}
        amount={props.expenseData[2].amount}
        date={props.expenseData[2].date}
      />
      <ExpenseItem
        title={props.expenseData[3].title}
        amount={props.expenseData[3].amount}
        date={props.expenseData[3].date}
      />
    </Card>
  );
}

export default Expenses;
