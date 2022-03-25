import { useState } from "react";
export const Counter = () => {


    const [count, setCount] = useState()


  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => setCount(count+1)}>Click</button>
    </div>
  );
};
