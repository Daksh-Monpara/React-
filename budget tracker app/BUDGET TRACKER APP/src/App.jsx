import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Budget Tracker</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        body {
            background-color: #f8f9fe;
            padding: 2rem;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .card {
            background: white;
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .summary {
            background: #4475f2;
            color: white;
            padding: 1.5rem;
            border-radius: 12px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            text-align: center;
            margin-bottom: 2rem;
        }

        .summary-item h3 {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
            opacity: 0.9;
        }

        .summary-item p {
            font-size: 1.5rem;
            font-weight: 600;
        }

        input {
            width: 100%;
            padding: 0.8rem;
            margin-bottom: 1rem;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 1rem;
        }

        button {
            background: #4475f2;
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1rem;
        }

        button:hover {
            background: #3461d9;
        }

        .expense-list {
            margin-top: 1rem;
        }

        .expense-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
            border-bottom: 1px solid #eee;
        }

        .expense-info {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .expense-info .marker {
            width: 4px;
            height: 40px;
            background: #4475f2;
            border-radius: 4px;
        }

        .expense-actions {
            display: flex;
            gap: 1rem;
        }

        .expense-actions button {
            background: none;
            border: none;
            padding: 0.5rem;
            cursor: pointer;
            color: #666;
        }

        .expense-actions button:hover {
            color: #4475f2;
        }

        h2 {
            margin-bottom: 1rem;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="grid">
            <div class="card">
                <h2>Budget</h2>
                <input type="number" id="budgetInput" placeholder="Enter Total Amount">
                <button onclick="setBudget()">Set Budget</button>
            </div>
            <div class="card">
                <h2>Expenses</h2>
                <input type="text" id="expenseTitle" placeholder="Enter expense title">
                <input type="number" id="expenseAmount" placeholder="Enter amount">
                <button onclick="addExpense()">Add Expense</button>
            </div>
        </div>

        <div class="summary">
            <div class="summary-item">
                <h3>Total Budget</h3>
                <p id="totalBudget">0</p>
            </div>
            <div class="summary-item">
                <h3>Expenses</h3>
                <p id="totalExpenses">0</p>
            </div>
            <div class="summary-item">
                <h3>Balance</h3>
                <p id="balance">0</p>
            </div>
        </div>

        <div class="card">
            <h2>Expense List</h2>
            <div id="expenseList" class="expense-list">
                <!-- Expense items will be added here dynamically -->
            </div>
        </div>
    </div>

    <script>
        let budget = 0;
        let expenses = [];

        function setBudget() {
            const budgetInput = document.getElementById('budgetInput');
            budget = parseFloat(budgetInput.value) || 0;
            updateSummary();
            budgetInput.value = '';
        }

        function addExpense() {
            const titleInput = document.getElementById('expenseTitle');
            const amountInput = document.getElementById('expenseAmount');
            
            const title = titleInput.value;
            const amount = parseFloat(amountInput.value) || 0;

            if (title && amount > 0) {
                expenses.push({ title, amount });
                updateSummary();
                updateExpenseList();
                titleInput.value = '';
                amountInput.value = '';
            }
        }

        function deleteExpense(index) {
            expenses.splice(index, 1);
            updateSummary();
            updateExpenseList();
        }

        function editExpense(index) {
            const expense = expenses[index];
            document.getElementById('expenseTitle').value = expense.title;
            document.getElementById('expenseAmount').value = expense.amount;
            deleteExpense(index);
        }

        function updateSummary() {
            const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
            const balance = budget - totalExpenses;

            document.getElementById('totalBudget').textContent = budget.toFixed(2);
            document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);
            document.getElementById('balance').textContent = balance.toFixed(2);
        }

        function updateExpenseList() {
            const expenseList = document.getElementById('expenseList');
            expenseList.innerHTML = '';

            expenses.forEach((expense, index) => {
                const expenseItem = document.createElement('div');
                expenseItem.className = 'expense-item';
                expenseItem.innerHTML = `
                    <div class="expense-info">
                        <div class="marker"></div>
                        <div>
                            <h3>${expense.title}</h3>
                            <p>$${expense.amount.toFixed(2)}</p>
                        </div>
                    </div>
                    <div class="expense-actions">
                        <button onclick="editExpense(${index})">✏️</button>
                        <button onclick="deleteExpense(${index})">🗑️</button>
                    </div>
                `;
                expenseList.appendChild(expenseItem);
            });
        }
    </script>
</body>
</html>

  return (
    <>
      
    </>
  )
}

export default App
