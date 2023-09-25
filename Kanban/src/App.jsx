import { useState } from "react";
import tasks from "./tasks";
import "./App.css";
import Board from "./components/Board/Board";
function App() {
  const [backLogTasks, setBackLogsTasks] = useState([...tasks]);
  const [toDoTasks, setToDoTasks] = useState([]);
  const [onGoingTasks, setOnGoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  function handleTasks(e, position, taskId) {
    let index = appBoards[position - 1].tasks.findIndex((task) => {
      return taskId === task.id;
    });
    let elem = appBoards[position - 1].tasks.splice(index, 1);
    appBoards[position - 1].tasksSettor([...appBoards[position - 1].tasks]);
    if (e.target.name === "forward") {
      appBoards[position].tasks.push(...elem);
      if (position + 1 == 4) {
        appBoards[position].tasks.sort((a, b) => b.id - a.id);
      } else {
        appBoards[position].tasks.sort((a, b) => a.id - b.id);
      }

      appBoards[position].tasksSettor([...appBoards[position].tasks]);
    } else if (e.target.name === "backward") {
      appBoards[position - 2].tasks.push(...elem);
      appBoards[position - 2].tasks.sort((a, b) => a.id - b.id);
      appBoards[position - 2].tasksSettor([...appBoards[position - 2].tasks]);
      return;
    }
    // position == 1 && position == 4 &&
    //  appBoards[position-1].fil
    //   } else if (position == 4) {
    //   console.log(position)
    // }else{
    //   console.log(position)
    // }
  }
  const appBoards = [
    {
      name: "Backlog",
      position: 1,
      tasks: backLogTasks,
      tasksSettor: setBackLogsTasks,
    },
    {
      name: "To Do",
      position: 2,
      tasks: toDoTasks,
      tasksSettor: setToDoTasks,
    },
    {
      name: "On going",
      position: 3,
      tasks: onGoingTasks,
      tasksSettor: setOnGoingTasks,
    },
    {
      name: "Done",
      position: 4,
      tasks: doneTasks,
      tasksSettor: setDoneTasks,
    },
  ];

  return (
    <>
      <nav></nav>
      <div className="kanban-app">
        {appBoards.map((board) => {
          return (
            <Board
              key={board.position}
              boardPosition={board.position}
              name={board.name}
              tasks={board.tasks}
              handleTasks={handleTasks}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
