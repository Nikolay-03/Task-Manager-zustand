import {useTaskStore} from "../../store/taskStore.ts";
import {Task} from "../../types/Task.ts";
import TaskItem from "../TaskItem/TaskItem.tsx";
import './task-list.scss'
import {useQuery} from "react-query";
import {getTasks} from "../../services/api/tasks.ts";
import {useEffect} from "react";
const TaskList = () => {
    const {tasks,setTasks} = useTaskStore()
    const {data} = useQuery({
        queryKey:'task',
        queryFn: () => getTasks()
    })
    useEffect(() => {
        if(data){
           setTasks(data)
        }
    }, [data]);
    return (
        <div className='task__list'>
            {tasks.map((task: Task, index) => <TaskItem id={task.id} title={task.title} completed={task.completed} key={index}/>)}
        </div>
    );
};

export default TaskList;