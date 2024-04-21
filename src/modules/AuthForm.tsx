import { Button, FormControl, TextField } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckRole } from "../components/Auth/CheckRole";
import { ROLE_ENUM, formStyle } from "../shared/constants";
import { checkAdminCredentials } from "../shared/helpers/checkAdminCredentials";
import { validateAuthInput } from "../shared/helpers/validateAuthInput";
import { ValidationErrorState } from "../shared/types";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/userSlice";

const selectTextOnRole = {
  [ROLE_ENUM.admin]: {
    header: 'Логин и пароль',
    firstInput: 'Логин',
    secondInput: 'Пароль',
    buttonText: 'Войти'
  },
  [ROLE_ENUM.user]: {
    header: 'Ваше имя и фамилия',
    firstInput: 'Имя',
    secondInput: 'Фамилия',
    buttonText: 'Выбрать тест'
  },
}

export const AuthForm: FC = () => {

  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [role, setRole] = useState<ROLE_ENUM>(ROLE_ENUM.user)

  const [firstNameError, setFirstNameError] = useState<ValidationErrorState>(null)
  const [secondNameError, setSecondNameError] = useState<ValidationErrorState>(null)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    const firstErr = validateAuthInput(firstName)
    const secondErr = validateAuthInput(secondName)

    setFirstNameError(firstErr)
    setSecondNameError(secondErr)

    if (firstErr || secondErr) return

    if(role === ROLE_ENUM.admin && !checkAdminCredentials(firstName, secondName)) {
      setFirstNameError('Неверный логин или пароль')
      setSecondNameError('Неверный логин или пароль')
      return
    }

    const user = role === ROLE_ENUM.admin
    ? { firstName, secondName: null, isAdmin: true}
    : { firstName, secondName, isAdmin: false}

    dispatch(login(user))

    navigate('/select-test')
  }

  const onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value)
    setFirstNameError(null)
  }

  const onSecondNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondName(event.target.value)
    setSecondNameError(null)
  }

  const onRoleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value as ROLE_ENUM)
  }, [setRole])

  return (
    <FormControl sx={formStyle}>
      <h2>{selectTextOnRole[role].header}</h2>
      <TextField
        error = {firstNameError !== null}
        placeholder={selectTextOnRole[role].firstInput}
        margin="normal"
        onChange={onFirstNameChange}
        helperText={firstNameError}
        required
      />
      <TextField
        error = {secondNameError !== null}
        placeholder={selectTextOnRole[role].secondInput}
        margin="normal"
        onChange={onSecondNameChange}
        helperText={secondNameError}
        required
      />

      <CheckRole role={role} onRoleChange={onRoleChange} />

      <Button
        type="submit"
        variant="contained"
        onClick={handleSubmit}
        sx={{
          margin: '1rem auto 0.5rem'
        }}>
          {selectTextOnRole[role].buttonText}
        </Button>
    </FormControl>
  )
}