import { Task } from "../types/Task";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {createJSONStorage, persist} from "zustand/middleware";

interface State {
    tasks: Task[];
}

interface Actions {
    setTasks:(tasks:Task[]) => void
    updateCompleteStatus: (id: number) => void;
    addTask: (taskInfo: string) => void;
    deleteTask: (id: number) => void;
}

export const useTaskStore = create<State & Actions>()(
    persist(
        immer((set) => ({
            tasks: [],
            setTasks:(tasks) => set((state) => {
                state.tasks = tasks
            }),
            updateCompleteStatus: (id) => set((state) => {
                const task = state.tasks.find(task => task.id === id);
                if (task) {
                    task.completed = !task.completed;
                }
            }),
            addTask: (taskInfo) => set((state) => {
                state.tasks.push({ id: state.tasks.length + 1, completed: false, title: taskInfo });
            }),
            deleteTask: (id) => set((state) => {
                state.tasks = state.tasks.filter(task => task.id !== id);
            }),
        })),
        {
            name: "task-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
