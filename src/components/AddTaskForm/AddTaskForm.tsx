import {useTaskStore} from "../../store/taskStore.ts";
import {useState} from "react";
import './add-task-form.scss'
const AddTaskForm = () => {
    const {addTask} = useTaskStore()
    const [title,setTitle] = useState<string>('')
    const onSubmit = (e) => {
        e.preventDefault()
        if(title){
            addTask(title)
            setTitle('')
        }
    }
    return (
        <form onSubmit={onSubmit} className='add__form'>
            <h2>Add task</h2>
            <div className='add__form__content'>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                <button type='submit'>Create</button>
            </div>
        </form>
    );
};

export default AddTaskForm;