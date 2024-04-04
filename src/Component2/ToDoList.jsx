import React from "react";
import "./ToDo.css";
const ToDoList = () => {
  return (
    <>
      <center className="todo-container">
        <div class="main">
          <div className="container ">
            <h1>Todo App</h1>
            <div class="row">
              <div class="col-6">
                <input type="text" placeholder="Todo Here" name="" id="" />
              </div>
              <div class="col-4">
                <input type="date" name="" id="" />
              </div>

              <div class="col-2">
                <button id="button1" type="button" class="btn btn-success">
                  Add
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-6">buy Milk</div>
              <div className="col-4">30/12/2023</div>
              <div className="col-2">
                <button id="button-2" type="button" class="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-6">Go to Collage</div>
              <div className="col-4">30/12/2023</div>
              <div className="col-2">
                <button id="button-3" type="button" class="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default ToDoList;
