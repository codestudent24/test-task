import { useState, useRef } from "react";
import { TodoItem } from "../../share/types";
import {
  createDate,
  getDateFromString,
  getHoursFromString,
  getMinutesFromString
} from "../../share/handleDate";
import { updateTodo } from "../../api/api";

type Props = {
  item: TodoItem;
  setIsEditable: (arg: boolean) => void;
  renderComponent: boolean;
  toRenderComponent: (arg: boolean) => void;
}

export default function EditableTodo({
  item,
  setIsEditable,
  renderComponent,
  toRenderComponent,
}: Props) {
  const [date] = useState(item.date.toString());

  const TaskRef = useRef<HTMLInputElement>(null);
  const DateRef = useRef<HTMLInputElement>(null);
  const HoursRef = useRef<HTMLInputElement>(null);
  const MinutesRef = useRef<HTMLInputElement>(null);
  const CheckboxRef = useRef<HTMLInputElement>(null);

  return(
    <div className="item-container-editable">
      <input
        type="text"
        ref={TaskRef}
        defaultValue={item.task}
      />
      <input
        type="date"
        ref={DateRef}
        defaultValue={getDateFromString(date)}
      />
      <input
        type="number"
        ref={HoursRef}
        defaultValue={getHoursFromString(date)}
        min='00'
        max='23'
      />
      <input
        type="number"
        ref={MinutesRef}
        defaultValue={getMinutesFromString(date)}
        min='00'
        max='60'
      />
      <input
        type="checkbox"
        ref={CheckboxRef}
        defaultChecked={item.isDone}
      />
      <button
        onClick={async () => {
          if (
            TaskRef.current &&
            DateRef.current &&
            HoursRef.current &&
            MinutesRef.current &&
            CheckboxRef.current
            ) {
              const date = createDate(
                DateRef.current.value,
                Number(HoursRef.current.value),
                Number(MinutesRef.current.value)
              )
              await updateTodo({
                task: TaskRef.current.value,
                date,
                isDone: CheckboxRef.current.checked,
              }, item._id)
              toRenderComponent(!renderComponent);
              setIsEditable(false);
          }
        }}
      >save</button>
      <button onClick={() => {setIsEditable(false)}}>close</button>
    </div>
  )
}