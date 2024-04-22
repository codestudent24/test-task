import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { FC } from "react";
import { CheckBoxDataType } from "../../shared/types";

type PropsType = {
  data: CheckBoxDataType,
  onDataChange: React.Dispatch<React.SetStateAction<CheckBoxDataType>>
}

export const CheckboxCustom: FC<PropsType> = ({ data, onDataChange }) => {
  const items = Object.keys(data)

  const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    console.log(value, checked)
    const newData: CheckBoxDataType = {...data, [value]: checked }
    onDataChange(newData)
  }

  return (
    <FormGroup>
      {items.map((item) =>
        <FormControlLabel
          key={item}
          control={
            <Checkbox checked={data[item]} value={item} onChange={handleChangeSelect} name={item} />
          }
          label={item}
      />)}
    </FormGroup>
  )
}