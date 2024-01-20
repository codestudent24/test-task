export type TodoItem = {
  _id: string;
  task: string;
  date: Date;
  isDone: boolean;
}

export type TodoPost = {
  task: string;
  date: Date;
  isDone: boolean;
}