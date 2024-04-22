import { TextField } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import { QUESTION_TYPES_ENUM } from "../../../shared/types";
import styles from './editTask.module.css';

type QuestionTypeWithText =
  QUESTION_TYPES_ENUM.text |
  QUESTION_TYPES_ENUM.number |
  QUESTION_TYPES_ENUM.textLarge |
  QUESTION_TYPES_ENUM.one

type PropsType = {
  questionType: QuestionTypeWithText
  correct: string,
  onCorrectChange: Dispatch<SetStateAction<string>>
}

export const EditCorrectText: FC<PropsType> = ({ questionType, correct, onCorrectChange }) => {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    onCorrectChange(event.target.value)
  }

  return <div className={styles.correctEditContainer}>
    <TextField
      id={`correct-${correct}`}
      fullWidth
      value={correct}
      onChange={handleInputChange}
      multiline={questionType === QUESTION_TYPES_ENUM.textLarge}
      rows={questionType === QUESTION_TYPES_ENUM.textLarge ? 5 : 1}
    />
  </div>
}