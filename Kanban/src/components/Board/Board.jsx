/* eslint-disable react/prop-types */
import { memo } from "react";
import "./Board.css";
import TaskSlab from "../TaskSlab/TaskSlab";
const Board = memo(function Board({ boardPosition, name, tasks, handleTasks }) {
  return (
    <div className="Board">
      <h1>{name}</h1>
      <div>
        {tasks.map((tasks) => {
          return (
            <TaskSlab
              key={tasks.id}
              id={tasks.id}
              boardPosition={boardPosition}
              description={tasks.description}
              handleTasks={handleTasks}
            />
          );
        })}
      </div>
    </div>
  );
});
export default Board;
