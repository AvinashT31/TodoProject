import React, { useState } from 'react'
import "../Styles/Todo.css";

const Todo = () => {

  const [inputData, setinputData] = useState("");
  console.log(inputData, "inputData");

  const [addItem, setaddItem] = useState([]);
  console.log(addItem, "addItem");

  const handleclick = (e) => {
    // console.log(e.target.value);
    setinputData(e.target.value);
  }

  const AddItem = () => {
    setaddItem([...addItem, inputData]);
    setinputData("");
  }

  const deleteItem = (id) => {
    // alert("working");
    console.log(id);

    const updatedItem = addItem.filter((e, index) => {
      return index !== +id;
    })
    setaddItem(updatedItem);
  }

  const RemoveAllTodo = () => {
    setaddItem([]);
  }


  return (
    <div className='todofullpage'>
      <div className='todopage'>

        <div className='todopageimage'>
          <div className='todoimage'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQde-fv2C6yqsKaqWF5hSP2IV62fAwo231GyA&usqp=CAU" alt="" />
          </div>
        </div>

        <div className='todoinputdata'>
          <input value={inputData} onChange={(e) => handleclick(e)} type="text" placeholder='Add item...' />
          <i class="fa-sharp fa-solid fa-plus" onClick={AddItem}></i>
        </div>

        {addItem && addItem.map((e, index) => (
          <div key={index} className='showTodoData'>
            <div className='todoData'>
              <div className='showData'>
                <p style={{textAlign:"left"}}>{e}</p>
              </div>
              <i class="fa-solid fa-trash" onClick={() => deleteItem(index)}></i>
            </div>
          </div>
        ))}

        <div className='removeItem'>
          <button onClick={RemoveAllTodo}>RemoveList</button>
        </div>



      </div>

    </div>
  )
}

export default Todo;

