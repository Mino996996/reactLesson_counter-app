import {useState} from 'react';
import './App.css';
import TodoElement from './components/TodoElement';
import AddTodo from './components/AddTodo';

const TodoApp =()=>{
  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  
  const add = () => {
    const newTodo = { id: todoList.length, content: value};
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setValue('');
  };
  
  const handleDelete = id =>{
    const newTodoList = todoList.filter(todo => todo.id !==id);
    setTodoList(newTodoList);
  }
  
  return(
    <div>
      <h1>TODO App</h1>
      <AddTodo value={value} onChange={handleChange} add={add} />
      <ul>
        {todoList.map((todo)=>(
          <TodoElement key={todo.id} content={todo.content} onDelete={()=>handleDelete(todo.id)}/>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;
