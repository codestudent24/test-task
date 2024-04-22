import { FC } from "react";

import { TaskType } from "../../../../shared/types";
import styles from '../resultedTask.module.css';

type PropsType = {
  task: TaskType,
  userAnswer: string
}

function selectAnswerClass(userAnswer: string, correct: string) {
  if(!userAnswer) return styles.incorrectTextAnswer
  const formattedUserAnswer = userAnswer.trim().toLocaleLowerCase()
  const formattedCorrectAnswer = correct.trim().toLocaleLowerCase()

  if (formattedUserAnswer === formattedCorrectAnswer) return styles.correctTextAnswer
  return styles.incorrectTextAnswer
}

export const ResultedTaskText: FC<PropsType> = ({ task, userAnswer }) => {
  return <>
    <div className={selectAnswerClass(userAnswer, task.correct as string)}>{userAnswer}</div>
    {userAnswer !== task.correct as string &&
      <div className={styles.correctTextAnswer}>
        {task.correct}
      </div>
    }
  </>
}