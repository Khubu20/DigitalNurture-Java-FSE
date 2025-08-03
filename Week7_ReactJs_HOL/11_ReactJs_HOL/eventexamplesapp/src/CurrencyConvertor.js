import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);
  const conversionRate = 0.011; // Example: 1 INR = 0.011 Euro

  const handleChange = (e) => {
    setRupees(e.target.value);
  };

  const handleSubmit = () => {
    const euroAmount = parseFloat(rupees) * conversionRate;
    setEuro(euroAmount.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        placeholder="Enter amount in Rupees"
        value={rupees}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro !== null && <p>Equivalent in Euro: €{euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
