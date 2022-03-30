import { useEffect, useState } from "react";
// import React from "react";

export const Counter = ({randomNumber}) => {
    const [count, setCount] = useState(0)
   
    useEffect(() => {
        console.log('randomNumber')
    })

  return (
    <div>
      <h4>{count}</h4> 
      <button onClick={() => setCount(count+1)}>Click</button>
    </div>
  );
};

// export class Counter extends React.Component {
//     state = {
//         count: 0,
//         name: 
//     };
//     hendleClick = () => { this.setState({count: this.state.count += 1}) } 
    
//   render() {
//     return (
//       <div>
//         <h4>{this.state.count}</h4>
//         <button onClick={this.hendleClick}>Click</button>
//       </div>
//     );
//   }
// }
