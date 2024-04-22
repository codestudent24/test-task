import { FC } from "react";
import { TaskType } from "../../../shared/types";
import { ResultedTaskCheckbox } from "./TaskType/ResultTaskCheckbox";
import { ResultedTaskRadio } from "./TaskType/ResultTaskRadio";
import { ResultedTaskText } from "./TaskType/ResultTaskText";

import styles from './resultedTask.module.css';

type PropsType = {
  task: TaskType,
  userAnswer: string | string[]
}

export const ResultedTask: FC<PropsType> = ({ task, userAnswer }) => {
  return <div className={styles.taskWrapper}>
    <h2>{task.question}</h2>
    { task.questionType === 'one' && <ResultedTaskRadio task={task} userAnswer={userAnswer as string} /> }
    { task.questionType === 'multiple' && <ResultedTaskCheckbox task={task} userAnswer={userAnswer} /> }
    { (task.questionType === 'text' || task.questionType === 'number') && <ResultedTaskText task={task} userAnswer={userAnswer as string} /> }
  </div>
}