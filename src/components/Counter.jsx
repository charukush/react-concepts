import { useState } from "react";

export default function Counter() {
  const [counter, setcounter] = useState(0);

  return (
    <>
      <p>Counter!!</p>
      <p>{counter}</p>
      <div>
        <button className="btn-rounded" onClick={() => setcounter(counter + 1)}>
          CountUp
        </button>
        <button className="btn-rounded" onClick={() => setcounter(0)}>
          Reset
        </button>
        <button className="btn-rounded" onClick={() => setcounter(counter - 1)}>
          CountDown
        </button>
      </div>
    </>
  );
}
