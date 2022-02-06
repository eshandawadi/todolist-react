import React from "react";
import { Task } from "../components/test/Task";

const TaskContainer = (props) => {
  return (
    <div className="task-container">
      <div className="task-container-title">{props.title}</div>
      <div className="task-list">
        {props.tasks.map((task, key) => {
          return (
            <Task
              task={task}
              edit={props.editTask}
              key={key}
              remove={props.deleteTask}
            />
          );
        })}
        ;
      </div>
    </div>
  );
};

export default TaskContainer;

// import React from "react";

// function TaskContainer(props) {
//   return (
//     <div className="task-container">
//       <div className="task-container-title">{props.title}</div>
//       <div className="task-list"></div>
//     </div>
//   );
// }

// export default TaskContainer;
