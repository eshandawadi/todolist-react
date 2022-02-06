import { useState } from "react";
import { TASKS } from "../utils/mockData/tasks";

export const EditTask = (props) => {
  console.log(props);
  const [tasks, setTasks] = useState([...TASKS]);

  const options = [
    { label: "To do", value: "todo" },
    { label: "In Progress", value: "inProgress" },
    { label: "Review", value: "review" },
    { label: "Completed", value: "completed" },
  ];

  const [task, setTask] = useState({
    id: new Date().toISOString(),
    title: props.editContent.title,
    description: props.editContent.description,
    tag: props.editContent.tag,
    status: props.editContent.status,
  });

  console.log(task);

  const inputHandler = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  let item = props.itemId;
  const updateTask = (id) => {
    // setTasks(

    tasks.map((item) => {
      if (item.id === id) {
        console.log(item.id);
        console.log(tasks);

        let i = {
          id: id,
          title: task.title,
          description: task.description,
          tag: task.tag,
          status: task.status,
        };
        // setTasks({...tasks,task})
        // console.log(tasks);
        id--;
        console.log(task);
        tasks.splice(id, 1, i);

        setTasks([tasks]);
      }

      return true;
    });

    console.log(tasks);
  };

  return (
    <form className="add-task-form">
      <div className="form-title">Edit Task</div>
      <div className="form-content">
        <div className="form-input">
          <label>Title</label>
          <input
            name="title"
            type="text"
            onChange={inputHandler}
            placeholder="Edit Title"
            value={task.title}
          />
        </div>
        <div className="form-input">
          <label>Description</label>
          <input
            name="description"
            type="text"
            onChange={inputHandler}
            placeholder="Edit Description"
            value={task.description}
          />
        </div>
        <div className="form-input">
          <label>Tag</label>
          <input
            name="tag"
            type="text"
            onChange={inputHandler}
            placeholder="Edit Tag"
            value={task.tag}
          />
        </div>
        <div className="form-input">
          <label>Select Status</label>
          <select name="status" onChange={inputHandler} value={task.status}>
            {options.map((v, key) => (
              <option value={v.value} key={key}>
                {v.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="btn-area">
        <div className="btn primary outline" onClick={props.closeDialog}>
          Close
        </div>
        <div
          className="btn primary"
          type="submit"
          onClick={() => {
            updateTask(item);
            props.closeDialog();
          }}
        >
          Update
        </div>
      </div>
    </form>
  );
};
