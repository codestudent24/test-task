import { FC } from "react";
import { TaskType } from "../../../shared/types";

import { TaskWithCheckbox } from "./TaskTypes/TaskWithCheckbox";
import { TaskWithNumber } from "./TaskTypes/TaskWithNumber";
import { TaskWithRadio } from "./TaskTypes/TaskWithRadio";
import { TaskWithText } from "./TaskTypes/TaskWithText";
import styles from './task.module.css';

type TaskProps = {
  task: TaskType
}

export const Task: FC<TaskProps> = ({ task }) => {
  return <div className={styles.taskContainer}>
    <h2>{task.question}</h2>

    {task.questionType === 'one' && (
      <TaskWithRadio answers={task.answers as string[]} id={task.id}/>
    )}

    {task.questionType === 'multiple' && (
      <TaskWithCheckbox answers={task.answers as string[]} id={task.id}/>
    )}

    {task.questionType === 'text' && (
      <TaskWithText id={task.id}/>
    )}

    {task.questionType === 'number' && (
      <TaskWithNumber id={task.id}/>
    )}
  </div>
}