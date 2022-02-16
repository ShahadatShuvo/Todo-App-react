import React from "react";

function Form(props) {
  
  function handleChange(event) {
    props.setTodo(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (props.todo === "") {
      alert("Type todo title");
    } else {
      props.onTodo(props.todo);
    }
    props.setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="todo"
          value={props.todo}
          placeholder="todo title"
          onChange={handleChange}
        />
        <button className="bg-success text-light">
          {props.temp ? "Add todo" : "Edit todo"}
        </button>
      </div>
    </form>
  );
}

export default Form;
