let express = require('express');
let router = express.Router();
//Router()used to connect api with comman route
let { users } = require('../models/users');
router.post("/register",async (req, res) => {
    let data = req.body;
    let newser=new users(data);
    let result=await newser.save();


    res.send(result);
})
router.post("/login", (req, res) => {
    res.send("login route called");
})
router.get("/getemp", (req, res) => {
    res.send("getemp route called");
})
router.patch("/updateemp",async (req, res) => {
    let data = req.body;
    if (!data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }
    let result = await users.findByIdAndUpdate(req.params._id, 
        { $set: data },{new:true});
    res.send(result);
})
module.exports = router;