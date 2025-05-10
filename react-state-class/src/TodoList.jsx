import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {

      let [todos, setTodos] = useState([{task:"Sample Task", id :uuidv4(), isDone:false}]);
      let [newTodo, setNewTodo] = useState("");

         let addNewTask = () => {
                setTodos([...todos, {task: newTodo, id:uuidv4(), isDone:false}]);
                setNewTodo("");
         }

         let updateTodoValue = (event) => {
                setNewTodo(event.target.value);
         };

         let deleteTodo = (id) => {
            setTodos ((prevTodos) =>todos.filter((prevTodos) => prevTodos.id != id));
            
         }

         let markAllDone = () => {
               setTodos( (prevTodos) => (
                  prevTodos.map((todo) => {
                       return {
                        ...todo,
                        isDone: true,
                       };
                  })

               ));
          };

          let markAsDone = (id) => {
            setTodos((prevtodos) => 
               prevtodos.map((todo) => {
                    if (todo.id == id) {
                    return {
                     ...todo,
                     isDone : true,
                    };
                  } else {
                     return todo;
                  }
               })

            );
           };

         

        return (
            <div>
                <input placeholder="add a Task" value = {newTodo} onChange={updateTodoValue}></input>
                <br></br>
                <button onClick={addNewTask}>add Task</button>
                <br></br>
                <br></br>
                <br></br>
              
              <hr></hr>
              <h4>Task Todo</h4>
              <ul>
                 {todos.map((todo) => (
                 <li key = {todo.id}>
                    <span style = {todo.isDone ? { textDecoration:"line-through" }: {}}>{todo.task}</span>
                    &nbsp; &nbsp; &nbsp;
                    <button onClick={() => deleteTodo(todo.id)}>delete</button>
                    <button onClick = {() => markAsDone(todo.id)}>markAsDone</button>

                    </li>
                 )
                )}
              </ul>
              <br></br>

              <button onClick={markAllDone}>markAllAsDone</button>

            </div>
        )
}