import { Button, TextField } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { QUESTION_TYPES_ENUM, TaskType } from "../../../shared/types";
import { useAppDispatch } from "../../../store/hooks";

import { updateTaskById } from "../../../store/testSlice";
import { EditAnswers } from "./EditAnswers";
import { EditCorrectText } from "./EditCorrectText";
import { EditQuestionType } from "./EditQuestionType";
import styles from './editTask.module.css';

type PropsType = {
  task: TaskType,
  onChangeMode: Dispatch<SetStateAction<boolean>>
}

function shouldBeAnswers(questionType: string) {
  return questionType === QUESTION_TYPES_ENUM.one || questionType === QUESTION_TYPES_ENUM.multiple
}

const EditTask: FC<PropsType> = ({ task, onChangeMode }) => {
  const [question, setQuestion] = useState(task.question);
  const [questionType, setQuestionType] = useState<QUESTION_TYPES_ENUM>(task.questionType);
  const [answers, setAnswers] = useState(task.answers || [] as string[]);
  const [correct, setCorrect] = useState(task.correct);

  const dispatch = useAppDispatch()

  function handleQuestionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuestion(event.target.value)
  }

  function saveTask() {
    const resultAnswers = answers.length > 0 ? answers : null
    const taskState: TaskType = {
      id: task.id,
      question,
      questionType,
      answers: resultAnswers,
      correct
    }
    dispatch(updateTaskById(taskState))
    onChangeMode(false)
  }

  return <div className={styles.editTaskWrapper}>
    <h3>Вопрос</h3>
    <TextField
      id="question"
      fullWidth
      value={question}
      onChange={handleQuestionChange}
    />

    <h3>Тип вопроса</h3>
    <EditQuestionType questionType={questionType} onQuestionTypeChange={setQuestionType} />

    {shouldBeAnswers(questionType) && <>
      <h3>Варианты ответов</h3>
      <EditAnswers answers={answers} onAnswersChange={setAnswers} />
    </>}

    {questionType === QUESTION_TYPES_ENUM.multiple ? <>
      <h3>Правильные ответы</h3>
      <EditAnswers answers={correct as string[]} onAnswersChange={setCorrect as Dispatch<SetStateAction<string[]>>} />
    </> : <>
    <h3>Ответ</h3>
    <EditCorrectText questionType={questionType} correct={correct as string} onCorrectChange={setCorrect as Dispatch<SetStateAction<string>>}/>
    </>}

    <Button variant="contained" onClick={saveTask}>Сохранить</Button>
  </div>
}

export default EditTask