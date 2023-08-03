import React, { useState } from "react";
//Styles
import "./ExpenseItem.css";

//Module
import ExpenseDate from "./ExpenseDate";

//
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //props.title은 상태의 기본값 : 처음 불릴때만 사용되는 값이다 => useState는 길이가 2인 배열 반환
  //첫번째 원소 : 현재 상태, 두번째 원소 : Setter 함수
  //useState가 관리하는 변수는 우리에게 보이진 않지만, 어떤 변수(메모리)의 값을 바꾸는 것임. 그것의 상태가 첫번째 원소임.
  //useState는 Per Component Instance로 만들어진다!! (그래서 해당 title만 바뀜)
  //컴포넌트들은 같게 생겼지만 모두 독립적으로 존재한다.
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    setTitle("Updated!");
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
