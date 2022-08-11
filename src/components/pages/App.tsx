import React, { useState } from 'react';
import Forms from '../Forms';
import List from '../List';
import Timer from '../Timer';
import style  from './App.module.scss';
import { ITask } from '../../types/itask';

function App() {
  const [task, setTask] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function SelectTask(taskSelected: ITask){
    setSelected(taskSelected);
    setTask(tasksPrevious => tasksPrevious.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })));
  }
   
  function finishTask(){
    if(selected){
      setSelected(undefined);
      setTask(tasksPrevious => tasksPrevious.map(task => {
        if(task.id === selected.id){
          return{
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }
   
  return (
    <div className={style.AppStyle}>
       <Forms setTasks={setTask}/>
       <List 
        task={task}
        SelectTask = {SelectTask}
        />
       <Timer 
       selected={selected}
       finishTask={finishTask} 
       />
    </div>
  );
}

export default App;
