import { Button, TextField } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";
import styles from './editTask.module.css';

type PropsType = {
  answers: string[],
  onAnswersChange: Dispatch<SetStateAction<string[]>>
}

export const EditAnswers: FC<PropsType> = ({ answers, onAnswersChange }) => {
  const [newAnswer, setNewAnswer] = useState('')

  function onInputChange(value: string, index: number) {
    const newData = [...answers];
    newData[index] = value;
    onAnswersChange(newData)
  }

  function handleDelete(index: number) {
    onAnswersChange(answers.filter((_, ind) => ind !== index))
  }

  function changeNewAnswerValue(event: React.ChangeEvent<HTMLInputElement>) {
    setNewAnswer(event.target.value)
  }

  function handleAdd() {
    onAnswersChange([...answers, newAnswer])
    setNewAnswer('')
  }

  return <div className={styles.answersEditContainer}>
    {answers && answers.map((text, index) =>
      <div className={styles.answerItemContainer} key={text}>
        <TextField
          id={`answer-${text}`}
          defaultValue={text}
          fullWidth
          onChange={e => {onInputChange(e.target.value, index)}}
        />
        <Button variant="text" onClick={() => {handleDelete(index)}} sx={{ position: "relative", top: "6px" }}>
          Удалить
        </Button>
      </div>
    )}
    <div className={styles.answerItemContainer}>
        <TextField
          id='new-answer'
          value={newAnswer}
          fullWidth
          onChange={changeNewAnswerValue}
        />
        <Button variant="text" onClick={handleAdd} sx={{ position: "relative", top: "6px" }}>
          Добавить
        </Button>
    </div>
  </div>
}