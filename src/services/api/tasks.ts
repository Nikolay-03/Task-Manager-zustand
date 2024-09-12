import axios from "axios";


export const getTasks = async () => {
    await new Promise(resolve => setTimeout(resolve,1000))
    const response = JSON.parse(JSON.parse(localStorage.getItem('task-storage')).state.tasks).state.tasks
    return {data: response}
}