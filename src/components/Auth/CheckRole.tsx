import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { FC } from "react";
import { ROLE_ENUM } from "../../shared/constants";

type PropsType = {
  role: ROLE_ENUM,
  onRoleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const CheckRole: FC<PropsType> = ({ role, onRoleChange }) => {
  return (
    <>
      <FormLabel
        id="role"
        sx={{
          margin: '1rem auto 0.5rem'
        }}
    >
      Выберите роль
    </FormLabel>

      <RadioGroup aria-labelledby="role"
        name="role-radio-group"
        value={role}
        onChange={onRoleChange}
      >
        <FormControlLabel value={ROLE_ENUM.admin} control={<Radio />} label='администратор' />
        <FormControlLabel value={ROLE_ENUM.user} control={<Radio />} label='ученик' />
      </RadioGroup>
    </>
  )
}