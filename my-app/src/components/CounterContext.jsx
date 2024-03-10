import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () =>{
    setCount(0)
  }

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

const CounterDisplay = () => {
  const { count } = useCounter();

  return (
    <div style={{marginTop:'10rem'}}>
      <h1>Counter: {count}</h1>
    </div>
  );
};

const CounterButtons = () => {
  const { increment, decrement, reset } = useCounter();

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <button onClick={increment} style={{marginRight:'0.7rem'}}>Increment</button>
      <button onClick={decrement} style={{marginRight:'0.7rem'}}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export { CounterProvider, CounterDisplay, CounterButtons, useCounter };
