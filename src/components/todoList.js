import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import "./todoList.css";

const TodoList = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const addTask = (event) => {
    setItem(event.target.value);
  };
  const secondEvent = () => {
    setNewItem((prevItems) => {
      return [...prevItems, item];
    });
  };
  const thirdEvent = () => {
    setNewItem([]);
  };

  return (
    <div>
      <br />
      <br />
      <div className="childOne">
        <input
          type="text"
          value={item}
          placeholder="Add a task"
          onChange={addTask}
        />
        <Button className="AddBtn" onClick={secondEvent}>
          <AddIcon />
        </Button>
        <br />
        <br />
        <ul className="textFont">
          {newItem.map((val) => {
            return <li> {val} </li>;
          })}
        </ul>
      </div>
      <br />
      <br />
      <div className="childTwo">
        <Button className="delBtn" onClick={thirdEvent}>
          <DeleteIcon />
          Delete All
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
