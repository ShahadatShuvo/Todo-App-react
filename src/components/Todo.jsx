import React from "react";

function Todo(props) {
  const showTodos = props.allTodos.map((todoObject) => (
    <p key={todoObject.id}>
      {todoObject.title}
      <input
        className="mx-3 bg-warning"
        type="button"
        value="Edit"
        onClick={() => props.onEdit(todoObject.id)}
      />
      <input
        className="bg-danger text-light"
        type="button"
        value="Delete"
        onClick={() => props.onDelete(todoObject.id)}
      />
    </p>
  ));
  return <div>{showTodos}</div>;
}

export default Todo;
