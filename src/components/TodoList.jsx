import CompletedTodos from "./CompletedTodos";
import ActiveTodos from "./ActiveTodos";

export default function TodoList({ setTodos, todos, onDeleteTask }) {
  return (
    <>
      <ActiveTodos
        setTodos={setTodos}
        todos={todos}
        onDeleteTask={onDeleteTask}
      />
      <CompletedTodos
        setTodos={setTodos}
        onDeleteTask={onDeleteTask}
        todos={todos}
      />
    </>
  );
}
