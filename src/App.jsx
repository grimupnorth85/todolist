import { useState } from 'react'
import './App.css'

function App() {

  const [items, setItems] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
      setInputValue(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
  

  if (inputValue.trim()) {
    setItems ([
      ...items, {text: inputValue, completed: false }])
    setInputValue('');
  }}

  const handleItemClick = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems)
  }

  const handleItemRightClick = (event, index) => {
    event.preventDefault();
    const newItems = items.filter((_, itemIndex) => itemIndex !== index)
    setItems(newItems)
  }

  return (
    <>
    <div id="title">
     <h1>to-do-list</h1>
     <h2>Left click to mark as completed.</h2>
     
     </div>

     <form onSubmit={handleFormSubmit} id="form"> 
      <input type="text" className="input" id="input" onChange={handleInputChange} 
      placeholder=' Add:' autoComplete='off' value={inputValue}/>
    </form>
    <h3>Right click to remove from list.</h3>

      <ul className="todos" id="todos">
        {items.map((item, index) => (
        <li key={index}
        onClick={() => handleItemClick(index)}
        onContextMenu={(event) => handleItemRightClick(event, index)}
        className={item.completed ? 'completed' : ''}
        >
        {item.text}

        </li>
      ))} 
      
      
      </ul>

</>
  )
}

export default App
