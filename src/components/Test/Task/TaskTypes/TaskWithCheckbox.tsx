import { Button } from "@mui/material";
import { FC, useState } from "react";
import useSubmitTask from "../../../../shared/hooks/useSubmitTask";
import { CheckBoxDataType } from "../../../../shared/types";
import { CheckboxCustom } from "../../../UI/Checkbox";

type PropsType = {
  answers: string[];
  id: number
}

export const TaskWithCheckbox: FC<PropsType> = ({ answers, id }) => {
  const [data, onDataChange] = useState<CheckBoxDataType>(
    () => answers.reduce((acc, curr) => { acc[curr] = false; return acc}, {} as CheckBoxDataType)
  )
  const submitTask = useSubmitTask();

  console.log(data)

  function handleTaskSubmit() {
    const answers: string[] = []

    for (const key in data) {
      if (data[key]) answers.push(key)
    }

    submitTask(id, answers)
  }

  return <>
    <CheckboxCustom data={data} onDataChange={onDataChange} />
    <Button type="button" onClick={handleTaskSubmit}>Дальше</Button>
  </>
}