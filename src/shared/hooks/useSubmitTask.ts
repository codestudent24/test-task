import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAnswer, setCurrentTask } from "../../store/testSlice";

export default function useSubmitTask() {
  const { testTasks, currentTask } = useAppSelector((state) => state.test)
  const dispatch = useAppDispatch()

  return function(taskId: number, answer: string | string[]) {
    let nextTask = currentTask + 1;
    if (nextTask > testTasks.length) nextTask = 1

    const result = { [taskId]: answer }

    dispatch(setAnswer(result))
    dispatch(setCurrentTask(nextTask))
  }
}