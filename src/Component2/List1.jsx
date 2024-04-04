import React from "react";

const List1 = () => {
  return (
    <>
      <div className="row">
        <div class="col-6">
          <input type="text" placeholder="Todo Here" name="" id="" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>

        <div className="col-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default List1;
