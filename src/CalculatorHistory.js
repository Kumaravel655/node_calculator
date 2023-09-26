import React, { useState, useEffect } from 'react';

function CalculatorHistory({ expression, result }) {
  const [history, setHistory] = useState([]);

  // Use useEffect to automatically add to history when expression and result change
  useEffect(() => {
    if (expression && result) {
      setHistory([...history, { expression, result }]);
    }
  }, [expression, result]);

  return (
    <div className="history">
      <h2>History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <span className="expression">{item.expression}</span>
            <span className="result">{item.result}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CalculatorHistory;
