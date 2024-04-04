import React from "react";

const List2 = () => {
  let todoname = "buy Milk";
  let todoDate = "30/12/2023";

  return (
    <>
      <div className="row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default List2;
