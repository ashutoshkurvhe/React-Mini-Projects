import { useState } from "react";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      const newExpense = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
      };
      setExpenses([...expenses, newExpense]);
      setDescription("");
      setAmount("");
    }
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>

      <div className="expense-list">
        {expenses.map((expense) => (
          <div key={expense.id} className="expense-item">
            <span>{expense.description}</span>
            <span>${expense.amount}</span>
            <button onClick={() => handleDelete(expense.id)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="total">
        <h2>Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default App;
