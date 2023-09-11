import {initModel, getTaskModel, getTasksModel, updateTaskModel,deleteTaskModel,createTaskModel } from "../models/test/tasks.js";


const init = () => {
    initModel();
}
//crud tasks
const getTasks = async () => {
    return await getTasksModel();
}
const getTask = async(id) => {
    return await getTaskModel(id);

}
const createTask = (task) => {
     createTaskModel(task);
}
const updateTask = (id, task) => {
    updateTaskModel(id, task);
}
const deleteTask = (id) => {
    deleteTaskModel(id);
}
export {getTask, getTasks, createTask, updateTask, deleteTask,init}