import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import  CreateTodo  from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos,setTodos] = useState([])

  async function main() {
    const response = await fetch("http://localhost:3000/todo");
  const result = await response.json();
  setTodos(result);
}

  return (    
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos = {todos}></Todos>
      </div>    
  );
}

export default App;
