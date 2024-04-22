import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FC } from "react";

type PropsType = {
  data: string[],
  value: string,
  onValueChange: React.Dispatch<React.SetStateAction<string>>
}

export const RadioGroupCustom: FC<PropsType> = ({ data, value, onValueChange }) => {
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onValueChange(value)
  }

  return (
    <RadioGroup
      name="radio-group"
      value={value}
      onChange={handleChangeRadio}
    >
      {data.map((item) => <FormControlLabel key={item} value={item} control={<Radio />} label={item} />)}
    </RadioGroup>
  )
}