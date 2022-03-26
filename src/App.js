import React, { useState } from 'react';
import TodoList from './TodoList';


function App() {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  }

  const itemsChange = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("");
  }

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) =>{
        return index !== id 
      })
    })

  }

  return (
    <>
      <div className='main_div'>
        <div className='centre_div'>
          <br />
          <h1> ToDo list </h1>
          <input type="text" placeholder='add items'
            value={inputList}
            onChange={itemEvent} />
          <button onClick={itemsChange}> + </button>
          <ol>
            {/* <li> {inputList} </li> */}
            {Items.map((itemsval, index) => {
              {/* return <li> {inputList} </li> */ }
              return (
                <TodoList
                  key={index}
                  id={index}
                  text={itemsval}
                  onSelect={deleteItems}
                />
              )
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
