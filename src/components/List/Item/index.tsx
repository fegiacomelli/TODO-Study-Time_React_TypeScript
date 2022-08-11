import style  from './Item.module.scss'
import { ITask } from '../../../types/itask';

interface Props extends ITask{
    SelectTask: (taskSelected : ITask) => void
}

export default function Item(
    {
        task, 
        time, 
        selected, 
        completed, 
        id, 
        SelectTask
    }: Props) {
    
    return(
        <li 
        className={`${style.item} ${selected ? style.itemSelect : ''} ${completed ? style.itemComplet: ''}`} 
        onClick={() => !completed && SelectTask(
        {
            task,
            time,
            selected,
            completed,
            id
        })}
        >
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && <span className={style.done} aria-Label="Task complete!!!"></span>}
          </li>
    )
}