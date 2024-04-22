import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Dispatch, FC } from "react";
import { convertQustionType } from "../../../shared/constants";
import { QUESTION_TYPES_ENUM } from "../../../shared/types";

import styles from './editTask.module.css';

type PropsType = {
  questionType: QUESTION_TYPES_ENUM,
  onQuestionTypeChange: Dispatch<React.SetStateAction<QUESTION_TYPES_ENUM>>
}

export const EditQuestionType: FC<PropsType> = ({ questionType, onQuestionTypeChange }) => {
  const handleQustionTypeChange = (event: SelectChangeEvent) => {
    onQuestionTypeChange(event.target.value as QUESTION_TYPES_ENUM);
  };

  return <div className={styles.editQuestionTypeWrapper}>
    <Select
      id="qustionType-select"
      value={questionType}
      placeholder="Тип ответа"
      fullWidth
      onChange={handleQustionTypeChange}
    >
      <MenuItem value={QUESTION_TYPES_ENUM.one}>{convertQustionType[QUESTION_TYPES_ENUM.one]}</MenuItem>
      <MenuItem value={QUESTION_TYPES_ENUM.multiple}>{convertQustionType[QUESTION_TYPES_ENUM.multiple]}</MenuItem>
      <MenuItem value={QUESTION_TYPES_ENUM.text}>{convertQustionType[QUESTION_TYPES_ENUM.text]}</MenuItem>
      <MenuItem value={QUESTION_TYPES_ENUM.textLarge}>{convertQustionType[QUESTION_TYPES_ENUM.textLarge]}</MenuItem>
      <MenuItem value={QUESTION_TYPES_ENUM.number}>{convertQustionType[QUESTION_TYPES_ENUM.number]}</MenuItem>
    </Select>
  </div>
}