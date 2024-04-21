export type ValidationErrorState = string | null

type QuestionType = 'one' | 'multiple' | 'text' | 'number'
type AnswerType = string | string[]

export type TaskType = {
  id: number,
  question: string;
  questionType: QuestionType
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