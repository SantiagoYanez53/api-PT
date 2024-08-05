const cors = require("cors")
const express = require("express")

const taskRoute = require("./routes/toDo.route")

const app = express()

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoute)

app.get("/", (req,res) => {
    res.json ({
        message: "Proyect_Test APIv1"
    })
});

module.exports = app