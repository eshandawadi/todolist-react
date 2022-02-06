import React, { useState } from "react";
import Nav from "../components/partials/Nav";
import TaskContainer from "../containers/TaskContainer";
import { TASKS } from "../Utils/mokeData/tasks";
import { Dialog } from "../components/common/Dialog";
import { AddTask } from "../components/test/AddTask";

function Landing() {
  const [tasks, setTasks] = useState([...TASKS]);
  // const [filteredTasks, setFilteredTasks] = useState([...TASKS]);
  const [selectedId, setSelectedId] = useState("-1");
  const [isAppear, setIsAppear] = useState(false);
  const taskFilterHandler = (value) => {
    return tasks.filter((v) => v.status === value);
  };

  const toggleAppear = () => {
    setIsAppear(!isAppear);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
    toggleAppear();
  };

  const showAddDialog = () => {
    setSelectedId("-1");
    toggleAppear();
  };

  const deleteTask = (id) => {
    const tempTasks = tasks.filter((v) => v.id !== id);
    setTasks([...tempTasks]);
  };

  const editTask = (id) => {
    setSelectedId(id);
    toggleAppear();
  };

  const saveTask = (task) => {
    const index = tasks.findIndex((v) => v.id === task.id);
    const tempTasks = [...tasks];

    tempTasks[index] = task;
    setTasks([...tempTasks]);
    toggleAppear();
  };

  const findTask = (id) => {
    return tasks.find((v) => v.id === id);
  };

  return (
    <>
      <main>
        <Nav />

        <section className="home">
          <div className="title-area">
          <div className="section-title"> Tasks</div>
          <div>
            <button className="btn primary" onClick={showAddDialog}>
              Add task
            </button>
            </div>
          </div>
          <div className="section-desciption">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis commodi consequuntur debitis doloremque explicabo facere facilis iusto, molestias,
          </div>

          <div className="task-content">
            <TaskContainer
              editTask={editTask}
              title={"Todo"}
              tasks={taskFilterHandler("todo")}
              deleteTask={deleteTask}
            />
            <TaskContainer
              editTask={editTask}
              title={"Inprogress"}
              tasks={taskFilterHandler("inprogress")}
              deleteTask={deleteTask}
            />
            <TaskContainer
              editTask={editTask}
              title={"Review"}
              tasks={taskFilterHandler("review")}
              deleteTask={deleteTask}
            />
            <TaskContainer
              editTask={editTask}
              title={"Completed"}
              tasks={taskFilterHandler("completed")}
              deleteTask={deleteTask}
            />
          </div>
        </section>
      </main>
      {isAppear && (
        <Dialog closeDialog={toggleAppear}>
          <AddTask
            findTask={findTask}
            selectedId={selectedId}
            closeDialog={toggleAppear}
            addTask={addTask}
            editTask={saveTask}
          />
        </Dialog>
      )}
    </>
  );
}

export default Landing;
