import { useEffect, useState } from "react";
import { TodoItem } from "../share/types";
import { getTodos } from "../api/api";
import TodoElement from "../components/TodoItem";
import HeadElement from "../components/HeadElement";
import CreateTodo from "../components/CreateTodo";
import './main.css';

export default function Main() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [renderComponent, toRenderComponent] = useState(false);

  useEffect(() => {
    async function getAllTodos() {
      const todos = await getTodos();
      if (todos) {
        setTodoList(todos)
      } else {
        setTodoList([])
      }
    }
    getAllTodos();
  }, [renderComponent])

  return (
    <main>
      <HeadElement />
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo._id}>
              <TodoElement
                item={todo}
                renderComponent={renderComponent}
                toRenderComponent={toRenderComponent}
              />
            </li>
          )
        })}
      </ul>
      <h2>Add new task</h2>
      <CreateTodo
        renderComponent={renderComponent}
        toRenderComponent={toRenderComponent}
      />
    </main>
  )
}