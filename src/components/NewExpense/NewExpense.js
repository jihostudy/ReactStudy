import React from "react";
//imports
import ExpenseForm from "./ExpenseForm";
//Style
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  //함수를 인자로 넘겨주면, 자식에서 해당 함수를 사용할 수 있다.
  //on--으로 작성해서 해당 prop은 함수임을 나타내기 + Handler로 함수이름을 만들기(통상)
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
