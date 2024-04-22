import { Button } from "@mui/material";
import { FC, useState } from "react";
import useSubmitTask from "../../../../shared/hooks/useSubmitTask";

type PropsType = {
  id: number
}

export const TaskWithNumber: FC<PropsType> = ({ id }) => {
  const [value, setValue] = useState<string>('')
  const submitTask = useSubmitTask();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValue(event.target.value)
  }

  function handleTaskSubmit() {
    submitTask(id, value)
  }

  return <>
    <input type="number" value={value} onChange={handleInputChange} />
    <Button type="button" onClick={handleTaskSubmit}>Дальше</Button>
  </>
}