import { Button } from "@mui/material";
import { FC, useState } from "react";
import AddTask from "../../components/AdminTask/AddTask";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { useNavigate } from "react-router-dom";
import useAuth from "../../shared/hooks/useAuth";
import { setTest } from "../../store/testSlice";
import TaskEditWrapper from "./TaskEditWrapper";
import styles from './testEdit.module.css';

export const TestEdit: FC = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const { testTasks, testSlug } = useAppSelector(state => state.test)

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useAuth(true)

  function toggleAddTask() {
    setShowAddTask(prev => !prev)
  }

  function saveTestState() {
    dispatch(setTest({ tasks: testTasks, slug: testSlug }))
    setTimeout(() => {
      navigate('/select-test')
    }, 100)
  }

  return <div className={styles.editWrapper}>
    <Button onClick={toggleAddTask} variant="contained">{showAddTask ? 'Скрыть' : 'Добавить вопрос'}</Button>
    { showAddTask && <AddTask onChangeMode={setShowAddTask} /> }
    <div className={styles.taskContainer}>
      {testTasks.map((task) => <TaskEditWrapper task={task} key={task.id} />)}
    </div>
    <Button onClick={saveTestState} variant="contained">Сохранить изменения</Button>
  </div>
}