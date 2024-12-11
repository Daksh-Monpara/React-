import { useState } from 'react'
import './App.css'
import './firebase'

function App() {
  const [budget, setBudget] = useState(0)
  const [expenses, setExpenses] = useState([])

  const handleSetBudget = (e) => {
    e.preventDefault()
    const budgetInput = e.target.budgetInput.value
    setBudget(parseFloat(budgetInput) || 0)
    e.target.budgetInput.value = ''
  }

  const handleAddExpense = (e) => {
    e.preventDefault()
    const title = e.target.expenseTitle.value
    const amount = parseFloat(e.target.expenseAmount.value) || 0

    if (title && amount > 0) {
      setExpenses([...expenses, { title, amount }])
      e.target.expenseTitle.value = ''
      e.target.expenseAmount.value = ''
    }
  }

  const handleDeleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index))
  }

  const handleEditExpense = (index) => {
    const expense = expenses[index]
    document.getElementById('expenseTitle').value = expense.title
    document.getElementById('expenseAmount').value = expense.amount
    handleDeleteExpense(index)
  }

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const balance = budget - totalExpenses

  return (
    <div className="container">
      <div className="grid">
        <div className="card">
          <h2>Budget</h2>
          <form onSubmit={handleSetBudget}>
            <input 
              type="number" 
              name="budgetInput"
              placeholder="Enter Total Amount"
            />
            <button type="submit">Set Budget</button>
          </form>
        </div>
        <div className="card">
          <h2>Expenses</h2>
          <form onSubmit={handleAddExpense}>
            <input
              type="text"
              name="expenseTitle"
              placeholder="Enter expense title"
            />
            <input
              type="number" 
              name="expenseAmount"
              placeholder="Enter amount"
            />
            <button type="submit">Add Expense</button>
          </form>
        </div>
      </div>

      <div className="summary">
        <div className="summary-item">
          <h3>Total Budget</h3>
          <p>{budget.toFixed(2)}</p>
        </div>
        <div className="summary-item">
          <h3>Expenses</h3>
          <p>{totalExpenses.toFixed(2)}</p>
        </div>
        <div className="summary-item">
          <h3>Balance</h3>
          <p>{balance.toFixed(2)}</p>
        </div>
      </div>

      <div className="card">
        <h2>Expense List</h2>
        <div className="expense-list">
          {expenses.map((expense, index) => (
            <div key={index} className="expense-item">
              <div className="expense-info">
                <div className="marker"></div>
                <div>
                  <h3>{expense.title}</h3>
                  <p>${expense.amount.toFixed(2)}</p>
                </div>
              </div>
              <div className="expense-actions">
                <button onClick={() => handleEditExpense(index)}>✏️</button>
                <button onClick={() => handleDeleteExpense(index)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
