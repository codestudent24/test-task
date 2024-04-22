import { Button } from "@mui/material";
import { FC, useState } from "react";
import useSubmitTask from "../../../../shared/hooks/useSubmitTask";
import { RadioGroupCustom } from "../../../UI/RadioGroup";

type PropsType = {
  answers: string[];
  id: number
}

export const TaskWithRadio: FC<PropsType> = ({ answers, id }) => {
  const [value, setValue] = useState<string>(answers[0])
  const submitTask = useSubmitTask();

  function handleTaskSubmit() {
    submitTask(id, value)
  }

  return <>
    <RadioGroupCustom data={answers} value={value} onValueChange={setValue} />
    <Button type="button" onClick={handleTaskSubmit}>Дальше</Button>
  </>
}