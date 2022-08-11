import React from "react";
import Button from "../button";
import style from './Forms.module.scss'
import { ITask } from '../../types/itask';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}


function Forms({ setTasks }: Props){
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addingTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    setTasks(existingTasks => 
      [
        ...existingTasks,
        {
          task,
          time,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ]
    );
    setTask("");
    setTime("00:00");
  }
  
  return (
    <form className={style.newTask} onSubmit={addingTask}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Add a new study</label>
          <input
            type="text"
            name="task"
            id="task"
            value={task}
            onChange={event => setTask(event.target.value)}
            placeholder="What do you want to study?"
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="time">Time </label>
          <input
            type="time"
            step="1"
            name="time"
            value={time}
            onChange={event => setTime(event.target.value)}
            id="time"
            min="00:00:00"
            max="1:30:00"
            required
          />
        </div>
        <Button type="submit">Add to</Button>
      </form>
  )
}


export default Forms;
