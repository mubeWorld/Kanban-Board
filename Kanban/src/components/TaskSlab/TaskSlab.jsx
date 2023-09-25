/* eslint-disable react/prop-types */

import { memo } from "react";
import "./TaskSlab.css";
const TaskSlab = memo(function TaskSlab({
  id,
  description,
  boardPosition,
  handleTasks,
}) {
  return (
    <div className="task-slab">
      <h2>{description}</h2>
      <div>
        <button
          className="arrow"
          onClick={(e) => handleTasks(e, boardPosition, id)}
          name="backward"
          disabled={boardPosition === 1 ? true : false}
        >
          {"<"}
        </button>
        <button
          className="arrow"
          onClick={(e) => handleTasks(e, boardPosition, id)}
          name="forward"
          disabled={boardPosition === 4 ? true : false}
        >
          {">"}
        </button>
      </div>
    </div>
  );
});
export default TaskSlab;
