import { ValidationErrorState } from "../types"

export function validateAuthInput(input: string): ValidationErrorState {
  if(!input.length) return 'заполните поле'
  if(input.match(/[0-9]/) !== null) return 'не должно содержать цифры'
  return null
}