import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ResultedTask } from "../../components/Test/ResultedTask";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearTest } from "../../store/testSlice";
import styles from './results.module.css';

export const Results:FC = () => {
  const { testTasks, progress } = useAppSelector(state => state.test)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleCloseResults() {
    dispatch(clearTest())
    navigate('/select-test')
  }

  return <div className={styles.resultsContainer}>
    {testTasks.map(task => <ResultedTask task={task} userAnswer={progress[task.id]} key={task.id}/>)}
    <Button variant="contained" onClick={handleCloseResults}>Закрыть</Button>
  </div>
}