import React, { memo } from "react";

const TODO = (props) => {
  console.log("=============INSIDE TODO==============");
  const toDo = props.toDos.map((todo) => {
    return <div>todo</div>;
  });
  return (
    <div className="App">
      TODO LIST
      {toDo}
    </div>
  );
};

export default memo(TODO);
