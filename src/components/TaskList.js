import React, {useState} from 'react';
import Item from './Item';
 
 function TaskList() {
    const [tasks,setTasks] = useState([
        {task:'Estudiar para el examen', completed:false},
        {task:'Estudiar para la vida', completed:false},
        {task:'Estudiar filter', completed:false}

    ])  
    const handlerTaskToggle = (index) =>{
        const updatedTask = tasks.map((task,position) =>
        i === index ? 
        {
            ...task,
            completed: !task.completed
        } 
        : task
        );
        setTasks(updatedTask)
    }
    return (
        <div>
            <div className='task-list'>
                {tasks.map((currenTask,index) =>(
                    <Item
                    key ={index}
                    task= {currenTask.task}
                    completed={currenTask.completed}
                    onToggle={handlerTaskToggle(index)}
                    />

                ))};
            </div>
        </div>
      );
 }
 
 export default TaskList;