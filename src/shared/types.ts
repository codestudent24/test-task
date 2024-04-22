export type ValidationErrorState = string | null

export enum QUESTION_TYPES_ENUM {
  one = 'one',
  multiple = 'multiple',
  text = 'text',
  textLarge = 'text-large',
  number = 'number',
}

type AnswerType = string | string[]

export type TaskType = {
  id: number,
  question: string;
  questionType: QUESTION_TYPES_ENUM
  answers: string[] | null;
  correct: AnswerType
}

export type TestType = {
  name: string,
  slug: string,
  tasks: TaskType[]
}

export type TestsList = Record<string, TestType[]>

export type TaskProgressType = Record<number, AnswerType>

export type TestProgressType = {
  [id: number]: AnswerType
}

export type CheckBoxDataType = {
  [text: string]: boolean
}