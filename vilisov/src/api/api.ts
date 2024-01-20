import { apiURL } from "../share/constants";
import type { TodoItem, TodoPost } from "../share/types";

export async function getTodos() {
  try {
    const response = await fetch(apiURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json() as TodoItem[];
    return data;
  } catch(err) {
    console.log('Error on getting todos:', err)
  }
}

export async function postTodo(item: TodoPost) {
  try {
    const response = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...item})
    })
    const data = await response.json() as TodoItem[];
    console.log('Item added:\n', data);
  } catch(err) {
    console.log('Error on posting todo:', err)
  }
}

export async function updateTodo(item: TodoPost, id: string) {
  try {
    const response = await fetch(`${apiURL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...item})
    })
    const data = await response.json() as TodoItem[];
    console.log('Item updated:\n', data);
  } catch(err) {
    console.log('Error on patching todo:', err)
  }
}

export async function deleteTodo(id: string) {
  try {
    const response = await fetch(`${apiURL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json() as TodoItem[];
    console.log('Item deleted:\n', data);
  } catch(err) {
    console.log('Error on deleting todo:', err)
  }
}