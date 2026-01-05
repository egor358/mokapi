import { useDispatch } from "react-redux";
import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { useState } from "react";
import { addToDo } from "./state/toDoSlice";
function App() {
  
  const [text, setText] = useState("");
  const dispatch = useDispatch()
 

  // 
  // const toDoDelete = (id)=>{
  //    setToDos((prev) => prev.filter((todo) => todo.id !== id));
  // }
  // const toggleCompleted = (id)=>{
  //      setToDos(toDos.map(to => to.id === id ? {...to,completed:!to.completed} :to ))
  // }
  const addNewToDo = ()=>{
    if(text.trim()){
      dispatch(addToDo(text))       //1. dispatch({
                                      //type: "todos/addToDo",  - объект в теле dispatch это action объект
                                      // payload: "купить хлеб"     
                                    //});
     
    }
    setText("")
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <button onClick={addNewToDo}>Добавить задачу</button>
      <ToDoList  />

    </>
  );
  
}

export default App;
