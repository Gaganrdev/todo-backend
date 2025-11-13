import { Prisma } from "@prisma/client";

//get
export const getTasks = () =>{
    return prisma.task.findMany()
}
//create
export const createTask = () =>{
    return prisma.task.create({
        data : {title},
    });
}
//delete tassk
export const deleteTask = () => {
    return prisma.task.delete({
        where:{id:Number(id)},
    });
}
//update task
export const updateTask = (id,title,completed) => {
    return prisma.task.update({
        where : {id:Number(id)},
        data: {title,completed},
    });
}