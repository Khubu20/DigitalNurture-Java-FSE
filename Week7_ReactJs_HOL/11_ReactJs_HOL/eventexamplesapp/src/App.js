import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const onPress = () => {
    alert("I was clicked");
  };

  const handleRupeeChange = (e) => {
    setRupees(e.target.value);
  };

  const handleConvert = () => {
    const converted = parseFloat(rupees) / 90; // example conversion rate
    setEuro(converted.toFixed(2));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Event Example App</h1>

      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>

      <br /><br />

      <button onClick={onPress}>OnPress</button>

      <br /><br />

      <div>
        <h2>Currency Converter</h2>
        <input
          type="number"
          value={rupees}
          onChange={handleRupeeChange}
          placeholder="Enter amount in Rupees"
        />
        <button onClick={handleConvert}>Convert</button>
        {euro && <p>Converted Amount in Euro: €{euro}</p>}
      </div>
    </div>
  );
}

export default App;
