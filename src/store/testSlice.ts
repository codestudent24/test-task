import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { TaskProgressType, TaskType, TestProgressType, TestType } from '../shared/types'
// import type { RootState } from '../../app/store'

interface TestState {
  currentTest: TestType | null,
  currentTask: number,
  progress: TestProgressType,
  result: number
}

const initialState: TestState = {
  currentTest: null,
  currentTask: 0,
  progress: {},
  result: 0,
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<TestType>) => {
      state = initialState
      state.currentTest = {...action.payload};
    },
    setAnswer: (state, action: PayloadAction<TaskProgressType>) => {
      const [ taskId, answer ] = Object.entries(action.payload)[0];
      state.progress[+taskId] = answer;
    },
    pushTask: (state, action: PayloadAction<TaskType>) => {
      state.currentTest?.tasks.push(action.payload)
    },
    updateTaskById: (state, action: PayloadAction<TaskType>) => {
      if (state.currentTest) {
        const index = state.currentTest.tasks.findIndex((task) => task.id === action.payload.id)
        if (index !== -1) state.currentTest.tasks[index] = {...action.payload}
      }
    },
    deleteTaskById: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.currentTest) {
        state.currentTest.tasks = state.currentTest.tasks.filter((task) => task.id !== id)
      }
    },
  },
})

export const {
  setTest,
  setAnswer,
  pushTask,
  updateTaskById,
  deleteTaskById
} = testSlice.actions

export default testSlice.reducer