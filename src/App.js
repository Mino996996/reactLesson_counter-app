import {useState} from 'react';
import './App.css';

const CountApp = () => {
  const [count, setCount] = useState(0);
  const plus = () =>{
    setCount(count + 1);
  }
  const minus = () =>{
    setCount(count - 1);
  }
  
  return(
    <div>
      <hi>カウンターApp</hi>
      <p>{count}</p>
      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    </div>
  );
};


export default CountApp;
