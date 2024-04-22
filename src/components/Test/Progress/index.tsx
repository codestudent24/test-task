import { FC } from "react";
import { TaskType, TestProgressType } from "../../../shared/types";
import { useAppDispatch } from "../../../store/hooks";
import { setCurrentTask } from "../../../store/testSlice";
import styles from './testProgressBar.module.css';

type PropsType = {
  tasks: TaskType[],
  progress: TestProgressType,
  currentTask: number
}

export const TestProgressBar: FC<PropsType> = ({
  tasks, progress, currentTask
}) => {
  const dispatch = useAppDispatch()

  if (!tasks.length) return null

  function selectClass(id: number) {
    if (id === currentTask) return styles.activeTask
    else if (progress[id]) return styles.doneTask
    else return styles.undoneTask
  }

  function handleClick(id: number) {
    dispatch(setCurrentTask(id))
  }

  return <div className={styles.progressContainer}>
    {tasks.map((task) => (
      <div
        key={task.id}
        className={ selectClass(task.id) }
        onClick={() => { handleClick(task.id) }}
      ></div>
    ))}
  </div>
}