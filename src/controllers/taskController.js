import { getTasks, createTask, updateTask, deleteTask } from "../services/taskService.js";

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await getTasks();
        return res.json(tasks);
    } catch (err) {
        return res.status(500).json({ message: 'Failed to get tasks', error: err.message });
    }
};

export const addTask = async (req, res) => {
    const { title } = req.body;
    try {
        if (!title) return res.status(400).json({ message: 'title empty' });
        const task = await createTask(title);
        return res.status(201).json({ message: 'Task created', task });
    } catch (err) {
        return res.status(500).json({ message: 'Task failed to create', error: err.message });
    }
};

export const editTask = async (req,res) => {
    const {id} = req.params;
    const {title,completed} = req.body;

    try{
        const task = await updateTask(id,{title,completed})
        if (!task){
            return res.status(404).json({message:"Update failed: task not found"});
        }
        return res.json({message:"Task updated",task});
    }
    catch (err){
        return res.status(500).json({message:"Update failed", error:err.message});
    }
};

export const removeTask = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteTask(id);
        return res.json({ message: 'Task deleted' });
    } catch (err) {
        return res.status(500).json({ message: 'Delete failed', error: err.message });
    }
};