import { useState } from "react";
import { TodoItem } from "../../share/types"
import { getDateFromString, getHoursFromString, getMinutesFromString, selectColor } from "../../share/handleDate";
import { deleteTodo } from "../../api/api";

type Props = {
  item: TodoItem;
  setIsEditable: (arg: boolean) => void;
  renderComponent: boolean;
  toRenderComponent: (arg: boolean) => void;
}

function correctTime(value: number) {
  return value.toString().padStart(2, '0')
}

export default function NonEditableTodo({
  item,
  setIsEditable,
  renderComponent,
  toRenderComponent,
}: Props) {
  const [date] = useState(item.date.toString());

  return(
    <div
      className="item-container"
      style={{ backgroundColor: selectColor(item.date)}}
    >
      <div className="task">{item.task}</div>
      <div className="date">{getDateFromString(date)}</div>
      <div className="time">
        <span>{correctTime(getHoursFromString(date))}:</span>
        <span>{correctTime(getMinutesFromString(date))}</span>
      </div>
      <input
        className="checkbox"
        type="checkbox"
        checked={item.isDone}
      />
      <button onClick={() => {setIsEditable(true)}}>edit</button>
      <button
        className="btn-delete"
        onClick={async () => {
          await deleteTodo(item._id);
          toRenderComponent(!renderComponent)
        }}>x</button>
    </div>
  )
}