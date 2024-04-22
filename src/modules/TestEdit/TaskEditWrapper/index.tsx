import { FC, useEffect, useState } from "react";
import Task from "../../../components/AdminTask";
import EditTask from "../../../components/AdminTask/EditTask";
import { TaskType } from "../../../shared/types";

type PropsType = {
  task: TaskType
}

const TaskEditWrapper: FC<PropsType> = ({ task }) => {
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    console.log(editMode)
  }, [editMode])

  return <>
    {editMode
      ? <EditTask task={task} onChangeMode={setEditMode} />
      : <Task task={task} onChangeMode={setEditMode} />
    }
  </>
}

export default TaskEditWrapper