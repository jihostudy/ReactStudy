import React from "react";
//Styles
import "./ExpenseItem.css";

//Module
import ExpenseDate from "./ExpenseDate";

//
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let title = props.title;

  const clickHandler = () => {
    title = "Changed!";
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
