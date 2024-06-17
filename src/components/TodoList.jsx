import CompletedTodos from "./CompletedTodos";
import ActiveTodos from "./ActiveTodos";
import NoTasksComponent from "./NoTasksComponent";

export default function TodoList({ setTodos, todos, onDeleteTask, darkMode }) {
  return (
    <>
      <ActiveTodos
        darkMode={darkMode}
        setTodos={setTodos}
        todos={todos}
        onDeleteTask={onDeleteTask}
      />
      <CompletedTodos
        darkMode={darkMode}
        setTodos={setTodos}
        onDeleteTask={onDeleteTask}
        todos={todos}
      />
      {todos.length === 0 && <NoTasksComponent />}
    </>
  );
}
