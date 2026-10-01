let express = require('express');
let router = express.Router();
let { users } = require('../models/users');
 
let { tasks } = require('../models/tasks');


router.post("/assign-task", async (req, res) => {
    let data = req.body;
    let newtask = new tasks(data);
    let result = await newtask.save();
    res.send(result);
})
router.get("/get-task", async (req, res) => {
    let result = await tasks.find();
    res.send(result);
});