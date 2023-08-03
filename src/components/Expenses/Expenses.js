import React, { useState } from "react";
//Style
import "./Expenses.css";

//Module
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

//
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  //하지만 filterInfoText는 filteredYear과 동일한 변수를 참조하는 것이나 다름없다.
  //-> state를 2개 쓰지 말고, 변수를 사용하는게 좋다.
  //이게 가능한 이유는, 어차피 State를 통해 Expenses가 다시 렌더링되기 때문에.
  let filterInfoText = "2019, 2021 & 2022";
  if (filteredYear === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else if (filteredYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filteredYear == "2022") {
    filterInfoText = "2019, 2020 & 2021";
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* Make filterInfoText Change by selected Year */}
        <p>Data for {filterInfoText} is hidden.</p>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
