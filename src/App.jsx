import React from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  const [allTodos, setAllTodos] = React.useState([]);

  const [temp, setTemp] = React.useState(true);

  const [todo, setTodo] = React.useState("");

  const [editId, setEditId] = React.useState("");

  console.log(allTodos);

  function onTodoHandler(title) {
    if (temp === true) { // for new todo add
      const newTodo = {
        id: "id" + new Date().getTime(),
        title,
      };
      setAllTodos((prevAllTodos) => [newTodo, ...prevAllTodos]);
      setTemp(true);
    } else // this is for edit
      setAllTodos((prevAlltodos) => {
        let finalArray = [];
        for (let i = 0; i < prevAlltodos.length; i++) {
          let currentTodo = prevAlltodos[i];
          if (currentTodo.id === editId) {
            const updatedTodo = {
              ...currentTodo,
              title: title,
            };
            finalArray[i] = updatedTodo;
          } else {
            finalArray[i] = currentTodo;
          }
        }
        return finalArray;
      });
    setTemp(true);
  }

  function onDeleteHandler(id) {
    setAllTodos((prevArray) => allTodos.filter((obj) => obj.id !== id));
    setTemp(true);
  }

  function onEditHandler(id) {
    console.log(id + " Edit!");
    setTemp(false);
    const item = allTodos.find((todo) => todo.id === id);
    setTodo(item.title);
    setEditId(id);
  }

  return (
    <div className="container my-5">
      <h1 className="text-center">Todo App</h1>
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-md-4">
          <Form
            onTodo={onTodoHandler}
            temp={temp}
            todo={todo}
            setTodo={setTodo}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10 col-md-6 mx-auto mt-5">
          <Todo
            allTodos={allTodos}
            onDelete={onDeleteHandler}
            onEdit={onEditHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
