import { useState } from "react";
import { TodoItem } from "../../share/types"
import EditableTodo from "./Editable";
import NonEditableTodo from "./NonEditable";
import './todoItem.css'

type Props = {
  item: TodoItem;
  renderComponent: boolean;
  toRenderComponent: (arg: boolean) => void;
}

export default function TodoElement({
  item,
  renderComponent,
  toRenderComponent }: Props)
{
  const [isEditable, setIsEditable] = useState(false)
  return (
    isEditable ? (
      <EditableTodo
        item={item}
        setIsEditable={setIsEditable}
        renderComponent={renderComponent}
        toRenderComponent={toRenderComponent}
      />
    ) : (
      <NonEditableTodo
        item={item}
        setIsEditable={setIsEditable}
        renderComponent={renderComponent}
        toRenderComponent={toRenderComponent}
      />
    )
  )
}