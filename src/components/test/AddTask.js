import { useState } from "react";

export const AddTask = (props) => {
  const options = [
    { label: "To do", value: "todo" },
    { label: "In Progress", value: "inprogress" },
    { label: "Review", value: "review" },
    { label: "Completed", value: "completed" },
  ];

  let initialTask = {
    id: new Date().toISOString(),
    title: "",
    description: "",
    tag: "",
    status: "todo",
  };

  if (props.selectedId !== "-1") {
    initialTask = props.findTask(props.selectedId);
  }

  const [task, setTask] = useState({ ...initialTask });

  const inputHandler = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const createTask = (e) => {
    e.preventDefault();
    props.selectedId === "-1" ? props.addTask(task) : props.editTask(task);
  };

  return (
    <form className="add-task-form" onSubmit={createTask}>
      <div className="form-title">
        {props.selectedId === "-1" ? "Add" : "Edit"}Task
      </div>
      <div className="form-content">
        <div className="form-input">
          <label>Title</label>
          <input
            name="title"
            type="text"
            onChange={inputHandler}
            placeholder="Enter title"
            value={task.title}
          />
        </div>
        <div className="form-input">
          <label>Description</label>
          <input
            name="description"
            type="text"
            onChange={inputHandler}
            placeholder="Enter description"
            value={task.description}
          />
        </div>
        <div className="form-input">
          <label>Tag</label>
          <input
            name="tag"
            type="text"
            onChange={inputHandler}
            placeholder="Enter tag"
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
        <button className="btn primary outline" onClick={props.closeDialog}>
          Close
        </button>
        <button className="btn primary" type="submit">
          {props.selectedId === "-1" ? "Add" : "Update"}
        </button>
      </div>
    </form>
  );
};
