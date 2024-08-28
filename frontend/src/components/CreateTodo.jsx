import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const main = async function () {
    try {
      // Make the fetch request
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      // Check if the response is okay
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the JSON response
      const json = await response.json();
  
      // Show success alert
      alert("Todo added");
    } catch (error) {
      // Handle errors (network issues, invalid JSON, etc.)
      console.error("Error:", error);
      alert("Failed to add Todo");
    }
  };
  
  return (
    <div>
      <input
        style={{
          margin: 10,
          padding: 10,
        }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
      ></input>
      <br />

      <input
        style={{
          margin: 10,
          padding: 10,
        }}
        type="description"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
      ></input>
      <br />

      <button
        style={{
          margin: 10,
          padding: 10,
        }}
        onClick={() => main}
      >
        Add a todo
      </button>
    </div>
  );
}

export default CreateTodo;