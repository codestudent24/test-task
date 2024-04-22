import { Button, TextField } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { QUESTION_TYPES_ENUM, TaskType } from "../../../shared/types";
import { useAppDispatch } from "../../../store/hooks";
import { pushTask } from "../../../store/testSlice";
import { EditAnswers } from "../EditTask/EditAnswers";
import { EditCorrectText } from "../EditTask/EditCorrectText";
import { EditQuestionType } from "../EditTask/EditQuestionType";
import styles from '../EditTask/editTask.module.css';

type PropsType = {
  onChangeMode: Dispatch<SetStateAction<boolean>>
}

function shouldBeAnswers(questionType: string) {
  return questionType === QUESTION_TYPES_ENUM.one || questionType === QUESTION_TYPES_ENUM.multiple
}

const AddTask: FC<PropsType> = ({ onChangeMode }) => {
  const [question, setQuestion] = useState('');
  const [questionType, setQuestionType] = useState<QUESTION_TYPES_ENUM>(QUESTION_TYPES_ENUM.one);
  const [answers, setAnswers] = useState([] as string[]);
  const [correct, setCorrect] = useState<string | string[]>('');

  const dispatch = useAppDispatch()

  function handleQuestionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuestion(event.target.value)
  }

  function saveTask() {
    const resultAnswers = answers.length > 0 ? answers : null
    const taskState: TaskType = {
      id: Math.round(1000 + Math.random() * 9000),
      question,
      questionType,
      answers: resultAnswers,
      correct
    }
    dispatch(pushTask(taskState))
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

export default AddTask