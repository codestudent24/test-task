import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { TaskProgressType, TaskType, TestProgressType } from '../shared/types';

export interface ISetTest {
  tasks: TaskType[],
  slug: string
}

const TEST_STATE = 'test-state';

function getFromLocaleStorage(): TestState | null {
  const stateString = localStorage.getItem(TEST_STATE)
  if (stateString) return JSON.parse(stateString) as TestState
  return null
}

function saveToLocalStorage(state: TestState) {
  localStorage.setItem(TEST_STATE, JSON.stringify(state))
}

interface TestState {
  testTasks: TaskType[],
  testSlug: string,
  currentTask: number,
  progress: TestProgressType,
  result: number
}

const fromStorage = getFromLocaleStorage()

const initialState: TestState = {
  testTasks: fromStorage?.testTasks || [],
  testSlug: fromStorage?.testSlug || '',
  currentTask: fromStorage?.currentTask || 1,
  progress: fromStorage?.progress || {},
  result: fromStorage?.result || 0,
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<ISetTest>) => {
      state.testSlug = action.payload.slug;
      state.testTasks = [...action.payload.tasks];
      state.currentTask = 1;
      state.progress = {};
      state.result = 0;
      saveToLocalStorage(state)
    },
    setAnswer: (state, action: PayloadAction<TaskProgressType>) => {
      const [ taskId, answer ] = Object.entries(action.payload)[0];
      state.progress[+taskId] = answer;
      saveToLocalStorage(state)
    },
    setCurrentTask: (state, action: PayloadAction<number>) => {
      state.currentTask = action.payload;
      saveToLocalStorage(state)
    },
    clearTest: (state) => {
      state.testSlug = '';
      state.testTasks = [];
      state.currentTask = 1;
      state.progress = {};
      state.result = 0;
      localStorage.removeItem(TEST_STATE)
    },
    pushTask: (state, action: PayloadAction<TaskType>) => {
      state.testTasks.push(action.payload)
    },
    updateTaskById: (state, action: PayloadAction<TaskType>) => {
      const index = state.testTasks.findIndex((task) => task.id === action.payload.id)
      if (index !== -1) state.testTasks[index] = {...action.payload}
    },
    deleteTaskById: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.testTasks = state.testTasks.filter((task) => task.id !== id)
    },
  },
})

export const {
  setTest,
  setAnswer,
  setCurrentTask,
  clearTest,
  pushTask,
  updateTaskById,
  deleteTaskById
} = testSlice.actions

export default testSlice.reducer