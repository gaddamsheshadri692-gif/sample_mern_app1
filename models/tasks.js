let taskSchema = mongoose.Schema({
    task_name:{type:String,required:true},
    task_des:{type:String,required:true},
    task_duedate:{type:Date,required:true},
    task_assignedBy:{type:mongoose.Schema.types.ObjectId,ref:"users",required:true},
    task_assignedTo:{type:mongoose.Schema.types.ObjectId,ref:"users",required:true},
    task_status:{type:String,enum:["pending","inprogress","completed"],default:"pending"},
},{ 
    timestamps:true
})
const tasks = mongoose.model("tasks", taskSchema);
module.exports = { tasks };