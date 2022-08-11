import { ITask } from "../../types/itask";
import Item from "./Item";
import style from './List.module.scss'

interface Props {
  task: ITask[],
  SelectTask: (taskSelected : ITask) => void
}

function List({task, SelectTask}: Props) {
  return (
    <aside className={style.ListTask}>
      <h2>Study's of day</h2>
      <ul>
        {task.map(item => (
          <Item 
          SelectTask = {SelectTask}
           key={item.id}
           {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;
