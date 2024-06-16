import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTask = (newTask) => {
    if (!newTask) return;
    const newTaskObj = {
      id: todos.length + 1,
      task: newTask,
      completed: false,
    };
    setTodos([...todos, newTaskObj]);
  };

  const handleDeleteTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const todosItems = JSON.parse(localStorage.getItem("items"));
    if (todosItems) {
      setTodos(todosItems);
    }
  }, []);

  return (
    <main className="max-w-[32rem] mx-auto md:mt-[10vh] bg-white md:rounded-md h-screen w-full md:w-auto md:h-auto">
      {/* <div className=""> */}
      <Header />
      <TodoInput onAddTask={handleAddTask} />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        onDeleteTask={handleDeleteTask}
      />
    </main>
  );
}

export default App;
