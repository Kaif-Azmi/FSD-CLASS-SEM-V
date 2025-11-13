import React, { useState } from "react";

export default function Todolist() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setList([...list, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updated = list.filter((item, i) => i !== index);
    setList(updated);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>Simple To-Do List</h2>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={{ flex: 1, padding: "10px" }}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul style={{ marginTop: "20px", textAlign: "left" }}>
        {list.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {item}
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
