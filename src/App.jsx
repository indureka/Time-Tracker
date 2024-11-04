import TaskManager from "./Components/TaskManager";
import { TaskProvider } from "./Contexts/TaskProvider";

import "./App.css";

function App() {
  return (
    <>
      <TaskProvider>
            <TaskManager />
        </TaskProvider>
    </>
  );
}

export default App;
