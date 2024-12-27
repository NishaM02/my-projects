import './App.css'
function App() {
  return (
    <main>
      <div>
        <div className="input-container">
          <input type="text" placeholder="Income or expense" />
          <input type="number" />
          <select>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button>+</button>
        </div>
      </div>
    </main>
  )
}

export default App;