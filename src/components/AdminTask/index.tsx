import { Dispatch, FC, SetStateAction } from "react";
import { convertQustionType } from "../../shared/constants";
import { TaskType } from "../../shared/types";

import { Button } from "@mui/material";
import styles from './task.module.css';

type PropsType = {
  task: TaskType,
  onChangeMode: Dispatch<SetStateAction<boolean>>
}

const Task: FC<PropsType> = ({ task, onChangeMode }) => {
  function changeEditMode() {
    console.log('CLICKED')
    onChangeMode(prev => !prev)
  }

  return <div className={styles.taskWrapper}>
    <h3 className={styles.question}>
      Вопрос:
      <br />
      <span>{ task.question }</span>
    </h3>

    <h3 className={styles.question}>
      Тип ответа:
      <br />
      <span>{ convertQustionType[task.questionType] }</span>
    </h3>

    {task.answers && (
      <div className={styles.answers}>
        <h3>Варианты ответов</h3>
        {task.answers.map((text) => <p key={text}>{text}</p>)}
      </div>
    )}

    <div className={styles.answers}>
      {Array.isArray(task.correct) ? <>
        <h3>Правильные ответы</h3>
        {task.correct.map((text) => <p key={text}>{text}</p>)}
      </> : <>
        <h3>Ответ</h3>
        <p>{task.correct}</p>
      </>}
    </div>

    <Button variant="contained" onClick={changeEditMode}>Изменить</Button>
  </div>
}

export default Task