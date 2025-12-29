import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { useState } from "react";
function App() {
  const [toDos, setToDos] = useState([]);   
  const [text, setText] = useState("");
  
  console.log(toDos);

  const addToDo = () => {
    if (text.trim()) {
      

      setToDos([
        ...toDos,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ]);
      setText("");
    }
  };
  const toDoDelete = (id)=>{
     setToDos((prev) => prev.filter((todo) => todo.id !== id));
  }
  const toggleCompleted = (id)=>{
       setToDos(toDos.map(to => to.id === id ? {...to,completed:!to.completed} :to ))
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <button onClick={addToDo}>Добавить задачу</button>
      <ToDoList toDos={toDos} toDoDelete={toDoDelete} toggleCompleted={toggleCompleted} />

    </>
  );
  
}

export default App;
