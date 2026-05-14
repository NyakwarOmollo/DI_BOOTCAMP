import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('+');

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      alert("Please enter valid numbers");
      return;
    }

    let res;

    switch (operation) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        res = number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
        break;
      default:
        res = 0;
    }

    setResult(res);
  };

  const clearAll = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>

      <div className="calculator">
        <input
          type="number"
          placeholder="First Number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
          className="operation-select"
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>

        <input
          type="number"
          placeholder="Second Number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <button onClick={calculate} className="calculate-btn">
          Calculate
        </button>

        <button onClick={clearAll} className="clear-btn">
          Clear
        </button>

        {result !== null && (
          <div className="result">
            <h2>Result: <span>{result}</span></h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;