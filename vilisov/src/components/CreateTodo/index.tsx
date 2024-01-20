import { useRef } from "react";
import {createDate} from "../../share/handleDate";
import { postTodo } from "../../api/api";

type Props = {
  renderComponent: boolean;
  toRenderComponent: (arg: boolean) => void;
}

export default function CreateTodo({renderComponent, toRenderComponent}: Props) {
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
        placeholder="task name"
      />
      <input
        type="date"
        ref={DateRef}
        defaultValue='2024-00-01'
      />
      H:&nbsp;
      <input
        type="number"
        ref={HoursRef}
        defaultValue='0'
        min='00'
        max='23'
      />
      M:&nbsp;
      <input
        type="number"
        ref={MinutesRef}
        defaultValue='0'
        min='00'
        max='60'
      />
      <input
        type="checkbox"
        ref={CheckboxRef}
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
            const fullDate = createDate(
              DateRef.current.value,
              Number(HoursRef.current.value),
              Number(MinutesRef.current.value)
            )
            await postTodo({
              task: TaskRef.current.value,
              date: fullDate,
              isDone: CheckboxRef.current.checked,
            })
            TaskRef.current.value = '';
            CheckboxRef.current.checked = false;
            toRenderComponent(!renderComponent)
          }
        }}
      >save</button>
    </div>
  )
}