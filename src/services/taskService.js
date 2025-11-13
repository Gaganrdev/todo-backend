import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// get all tasks
export const getTasks = () => {
    return prisma.task.findMany();
};

// create a task
export const createTask = (title) => {
    return prisma.task.create({
        data: { title },
    });
};

// delete task by id
export const deleteTask = (id) => {
    return prisma.task.delete({
        where: { id: Number(id) },
    });
};

// update task by id — data is an object { title?, completed? }
export const updateTask = (id, data) => {
    return prisma.task.update({
        where: { id: Number(id) },
        data,
    });
};
