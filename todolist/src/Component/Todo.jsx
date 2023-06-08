import React, { useState } from 'react'
import "../Styles/Todo.css";

const Todo = () => {

  const[inputData, setinputData] = useState("");
  console.log(inputData, "inputData");

  const handleclick = (e) => {
    // console.log(e.target.value);
    setinputData(e.target.value);
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
          <i class="fa-sharp fa-solid fa-plus"></i>
        </div>

      </div>

    </div>
  )
}

export default Todo;

