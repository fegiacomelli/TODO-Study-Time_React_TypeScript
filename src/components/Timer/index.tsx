import Button from '../button/index';
import Clock from './Clock';
import style from './Timer.module.scss'
import { timeToSecond } from '../../common/Utils/time';
import { ITask } from '../../types/itask';
import { useEffect, useState } from 'react';

interface Props{
    selected: ITask | undefined, 
    finishTask: () => void
}

export default function Timer({selected, finishTask}: Props){
    const [time, setTime] = useState<number>();

    useEffect(() =>{
      if(selected?.time){
        setTime(timeToSecond(selected.time))
      }
    },[selected]);

    function regresive(counter: number = 0){
         setTimeout(() => {
        if(counter > 0){
          setTime(counter - 1);
          return regresive(counter - 1);
        }
        finishTask();
         },1000);                                     
    }

    return(
       <div className={style.timer}>
        <p className={style.title}>Choose a card and start the chronometer</p>
        <div className={style.clockWrapper}>
        <Clock time={time} />
        </div>
        <Button onClick={() => regresive(time)}>
            Start!
        </Button>
    </div>
 )
} 
   
    