import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* 리액트에서는 Component들은 꼭 대문자로 시작해야한다 그래야 User Component임을 안다 */}
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
