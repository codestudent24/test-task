import { QUESTION_TYPES_ENUM } from "./types"

export enum ROLE_ENUM {
  user = 'user',
  admin = 'admin',
}

export enum SUBJECTS_ENUM {
  math = 'math',
  geography = 'geography'
}

export const formStyle = {
  margin: '1rem auto',
  padding: '2rem',
  minWidth: '320px',
  border: '1px solid #213547',
  borderRadius: '20px',
}

export const convertQustionType: Record<QUESTION_TYPES_ENUM, string> = {
  [QUESTION_TYPES_ENUM.one]: 'Один на выбор',
  [QUESTION_TYPES_ENUM.multiple]: 'Несколько на выбор',
  [QUESTION_TYPES_ENUM.text]: 'Короткий текст',
  [QUESTION_TYPES_ENUM.textLarge]: 'Длинный текст',
  [QUESTION_TYPES_ENUM.number]: 'Число',
}