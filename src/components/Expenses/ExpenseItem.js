import React, { useState } from "react";
//Styles
import "./ExpenseItem.css";

//Module
import ExpenseDate from "./ExpenseDate";

//
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //props.title은 상태의 기본값 => useState는 길이가 2인 배열 반환
  //첫번째 원소 : 현재 상태, 두번째 원소 : Setter 함수
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
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
