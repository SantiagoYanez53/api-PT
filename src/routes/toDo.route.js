const express = require("express");
const taskUseCase = require("../usecases/task.usecase")
const route = express.Router();



// GET para ToDo List

route.get ("/", async(req,res) => {
   try {
    const task = await taskUseCase.getAll();
    res.json ({
        succes: true,
        message: "All Tasks",
        data: { task }
    })
   } catch (error) {
    res.status(error.status || 500);
    res.json ({
        succes: false,
        error: error.message
    })
   }
})

//POST para crear/agregar ToDo´s

route.post("/", async (req, res) => {
    try {
        const task = await taskUseCase.create (req.body)
        res.json ({
            succes: true,
            message: "Task Added",
            data: {
                task:task
            }
        })
    } catch(error){
        res.status(error.status || 500);
        res.json ({
            succes: false,
            message: error.message
        })
    }
});

//PUT para actualizar 

route.put("/:id", async(req,res) => {
    try {
        const { id } = req.params; 
        const taskUpdate = await taskUseCase.updateById(id, req.body)
        res.json({
            succes: true,
            message: "Task updated",
            data: { task: taskUpdate}
        })
    }catch (error) {
        res.status(error.status || 500)
        res.json({
            succes: false,
            error: error.message
        })
    }

})

//DELETE para eliminar una tarea 

route.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const taskDelete = await taskUseCase.deleteById(id);
        
        res.json ({
            succes: true,
            message: "Taks Deleted",
            data: { task: taskDelete }
        })
    } catch(error) {
        res.status(error.status || 500)
        res.json ({
            succes: false,
            message: error.message
        })
    }
})

module.exports = route;


