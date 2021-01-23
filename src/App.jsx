import React, { useState } from 'react';
import ToDoList from './ToDoList';



const App = () =>{

    const [inputList, setInputList] = useState("");
    const [Item, setIteam] = useState([]); // empty array

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    }
    const listofitem = () =>{
        // how we are storing value in array and display
        setIteam((olditem)=>{
            // this is my array and add all the data in it
            return [...olditem,inputList ];
        });
        setInputList(" ");
    }
    const deleteItem = (id) =>{
        console.log('deleted');
        setIteam((olditem)=>{
            return olditem.filter((arrElem,index) =>{
                return index !== id;
            })
        })
    }
return(
    <>
    <div className='main-div'>
        <div className='center-div'>
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type='text' placeholder='Add a Iteam'
            value={inputList}
             onChange={itemEvent} />
            <button onClick={listofitem}> + </button>
            <ol>
                
                {Item.map((itemval,index) => {
                   return <ToDoList 
                   id={index}
                   key={index} 
                   text={itemval} 
                   onSelect={deleteItem}
                   />;
                })}
            </ol>
        </div>
    </div>

    </>
);
}

export default App;