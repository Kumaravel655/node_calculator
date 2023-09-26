import React, { useState } from 'react';
import CalculatorHistory from './CalculatorHistory';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(expression));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  // Helper function to generate number buttons (0-9) and operators (+, -, *, /)
  const renderButtons = () => {
    const buttons = [];
    for (let i = 0; i <= 9; i++) {
      buttons.push(
        <button key={i} onClick={() => handleButtonClick(i.toString())}>
          {i}
        </button>
      );
    }
    const operators = ['+', '-', '*', '/'];
    operators.forEach((operator) => {
      buttons.push(
        <button key={operator} onClick={() => handleButtonClick(operator)}>
          {operator}
        </button>
      );
    });
    return buttons;
  };

  return (
    <div className="calculator">
      <input type="text" value={expression} readOnly />
      <div className="buttons">
        {renderButtons()}
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
      </div>
      <div className="result">{result}</div>
      <CalculatorHistory expression={expression} result={result} />
    </div>
  );
}

export default Calculator;
