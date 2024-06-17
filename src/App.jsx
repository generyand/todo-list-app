import { useState } from "react";
import TodoApp from "./components/TodoApp";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <TodoApp setDarkMode={setDarkMode} darkMode={darkMode} />
    </div>
  );
}

export default App;
