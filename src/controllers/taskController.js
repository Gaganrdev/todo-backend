import { getTasks,createTask,updateTask,deleteTask}  from "../services/taskService";

export const getAllTasks = async (res) => {
    const task = await getTasks();
    res.json(task);
}

export const addTask = async (req,res) => {
    const {title} = req.body;
    try{
    const task = await createTask(title);
    if (!task)
    {
     return res.status(404).json({message:"title empty"});
    }
    return res.json({message:"Task crated"});
}
catch(err){
    return res.status(500).json({message:"Task failed to create",error:err.message});
}
}

export const editTask = async (req,res) => {
    const {id} = req.params;
    const {title,completed} = req.body;

    try{
        const task = await (id,{title,completed})
        if (!task){
            return res.status(404).json({message:"Update failed: task not found"});
        }
        return res.json({message:"Task updated",task});
    }
    catch (err){
        return res.status(500).json({message:"Update failed", error:err.message});
    }
};

export const removeTask = async (req,res) => {
    const {id} = req.paramas;
    await deleteTask(id)
    res.json({message:"Task deleted "})
}