import {FC} from "react";
import {Task} from "../../types/Task.ts";
import './task-item.scss'
import {Checkbox} from "@mui/material/";
import DeleteIcon from '@mui/icons-material/Delete';
import {useTaskStore} from "../../store/taskStore.ts";
const TaskItem:FC<Task> = (props) => {
    const {id, title, completed} = props
    const {updateCompleteStatus, deleteTask} = useTaskStore()
    return (
        <div className='task'>
            <div className='task__title'>{title}</div>
            <Checkbox
                checked={completed}
                onChange={() => updateCompleteStatus(id)}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <DeleteIcon className='task__delete' onClick={() => deleteTask(id)}/>
        </div>
    );
};

export default TaskItem;