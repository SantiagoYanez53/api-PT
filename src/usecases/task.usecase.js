const { modelName }= require("mongoose")
const Tasks = require("../models/tasks.models")
const createHttpError = require("http-errors")



async function create(taskData) {
    const newTask = await Tasks.create(taskData)
    return newTask
}

async function getAll(){
    const allTask = await Tasks.find()
    return allTask
}

async function getById(id) {
    const taskId = await Tasks.findById(id)
    return taskId
}

async function deleteById(id) {
    const taskDelete = await Tasks.findByIdAndDelete(id)
    return taskDelete
}

async function updateById(id, newTaskData) {
    const updateTask = await Tasks.findByIdAndUpdate (id, newTaskData, 
        {new: true}
    )
    return updateTask
}

module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById,
   
}