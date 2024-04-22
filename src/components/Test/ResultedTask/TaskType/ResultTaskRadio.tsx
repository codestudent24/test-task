import { FC } from "react";

import { TaskType } from "../../../../shared/types";
import styles from '../resultedTask.module.css';

type PropsType = {
  task: TaskType,
  userAnswer: string
}

function selectMultiAnswerClass(text: string, userAnswer: string, correct: string) {
  if(!userAnswer) return styles.answer
  if (text === userAnswer && text === correct) return styles.correctAnswer
  else if (text === userAnswer && text !== correct) return styles.incorrectAnswer
  else return styles.answer
}

export const ResultedTaskRadio: FC<PropsType> = ({ task, userAnswer }) => {
  return <>
    {task.answers!.length > 0 && (
      <ul className={styles.answersContainer}>
        {task.answers!.map((text) =>
          <li key={text} className={selectMultiAnswerClass(text, userAnswer, task.correct as string)}>
            {text}
          </li>
        )}
      </ul>
    )}
  </>
}