import { useEffect, useState } from "react";
import TodoApp from "./components/TodoApp";
import { useLocalStorage } from "./utils/useLocalStorage";
useLocalStorage;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const { getItem } = useLocalStorage("theme");
    setDarkMode(getItem() === "dark");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <TodoApp setDarkMode={setDarkMode} darkMode={darkMode} />
    </div>
  );
}

export default App;
