import React, { useRef } from "react";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  
  const handleCompleteClick = () => {
    completeTodo(item.id);
  };

  return (
    <div className={`card ${item.completed ? 'completed' : ''}`}>
      <div className="border1">
      <div className="input-container">
      <input
            type="checkbox"
            className="form-checkbox"
            checked={item.completed}
            onChange={handleCompleteClick}
          
          />
        <input
         className="form-input"
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
        {/* <button
          className="complete-button"
          type="checkbox"
          checked={item.completed}
          onClick={handleCompleteClick}
        >
          <IoCheckmarkDoneSharp />
        </button> */}

        <button
          className="silang"
          style={{ color: "gray" }}
          onClick={() => changeFocus()}
        >
          <MdModeEdit />
        </button>

        <button 
         className="silang"
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "gray" }}
          onClick={() => removeTodo(item.id)}
        >
          <RiDeleteBin2Fill />
        </button>
      </div>
      <div className="btns">
        
       
      </div>
      {/* {item.completed && <hr className="completed" style={{ borderColor: 'black' }} />} */}
    </div>
    </div>
  );
};

export default TodoItem;
