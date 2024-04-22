import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { TestProgressBar } from "../../components/Test/Progress";
import { Task } from "../../components/Test/Task";
import { Timer } from "../../components/Timer";
import { useAppSelector } from "../../store/hooks";

export const TaskUnit: FC = () => {
  const { testTasks, progress, currentTask } = useAppSelector((state) => state.test)
  const navigate = useNavigate()

  function closeTest() {
    navigate('/results')
  }

  if (!testTasks.length) return <h1>Тест не найден</h1>

  return <>
    <Timer />
    <TestProgressBar tasks={testTasks} progress={progress} currentTask={currentTask} />
    <Task task={ testTasks[currentTask - 1] } />
    <Button variant="contained" onClick={closeTest} sx={{ position: 'absolute', bottom: '2rem', right: 0 }}>Закончить тестирование</Button>
  </>
}