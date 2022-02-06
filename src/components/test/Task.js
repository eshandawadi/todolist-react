export const Task = (props) => {
  return (
    <div className="task-card">
      <div className="icons-area">
        <div
          className="material-icons"
          onClick={() => props.edit(props.task.id)}
        >
          edit
        </div>
        <div
          className="material-icons"
          onClick={() => props.remove(props.task.id)}
        >
          delete
        </div>
      </div>
      <div className="task-header">
        <div className="tag-chip">{props.task.tag}</div>
      </div>
      <div className="task-title one-line">{props.task.title}</div>
      <div className="task-description two-lines">{props.task.description}</div>
    </div>
  );
};
