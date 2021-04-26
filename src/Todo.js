import {useState} from 'react';

const TodoApp = () => {
  const [value, setValue] = useState('');
  
  const handleChange = e =>{
    const newValue = e.target.value;
    setValue(newValue);
  }
  
  return (
    <div>
      <h1>TODO APP</h1>
      <input type="text" value={value} onChange={handleChange}/>
      <p>{value}</p>
    </div>
  );
};

export default TodoApp;
