import "./ExpenseItem.css";

function ExpenseItem() {
  //   return문 마다 Root가 1개씩(Only) 있어야 한다. (중요!!)
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
      </div>
      <div className="expense-item__price">$294.67</div>
    </div>
  );
}

export default ExpenseItem;
