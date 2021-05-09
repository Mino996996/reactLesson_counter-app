import {useState} from 'react';
import './App.css';

const TodoApp =()=>{
  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  
  const add = () => {
    const newTodo = [...todoList, value];
    setTodoList(newTodo);
    setValue('');
  };
  
  return(
    <div>
      <h1>TODO App</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}/>
      <button onClick={add}>追加</button>
      <ul>
        {todoList.map((todo, i)=>(
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;
