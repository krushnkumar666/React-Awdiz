import { useEffect, useState } from "react";

function EffectTwo() {
  const [counter, setCounter] = useState(0);

  function Increment() {
    setCounter(counter + 1);
  }

  function Dec(){
    setCounter(counter-1);
  }
  useEffect(() => {
    console.log("code executed");
  }, [counter]);

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Dec}>-</button>
    </div>
  );
}
export default EffectTwo;
