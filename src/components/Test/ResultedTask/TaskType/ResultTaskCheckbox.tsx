import { FC } from "react";

import { TaskType } from "../../../../shared/types";
import styles from '../resultedTask.module.css';

type PropsType = {
  task: TaskType,
  userAnswer: string | string[]
}

function selectMultiAnswerClass(text: string, userAnswer: string | string[], correct: string[]) {
  if(!userAnswer) return styles.answer
  if (userAnswer.includes(text)) {
    if (correct.includes(text))
      return styles.correctAnswer
    else
      return styles.incorrectAnswer
  }
  return styles.answer
}

export const ResultedTaskCheckbox: FC<PropsType> = ({ task, userAnswer }) => {
  return <>
    {task.answers!.length > 0 && (
      <ul className={styles.answersContainer}>
        {task.answers!.map((ans) =>
          <li key={ans} className={selectMultiAnswerClass(ans, userAnswer, task.correct as string[])}>
            {ans}
          </li>
        )}
      </ul>
    )}
  </>
}