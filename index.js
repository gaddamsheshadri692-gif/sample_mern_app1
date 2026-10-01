let express=require('express');
let app=express();
let mongoose=require('mongoose');
let emproute=require('./routes/emp_route');
mongoose.connect("mongodb://localhost:27017/hrmanagement")
  .then(()=>console.log("connected to db"))
  .catch((err)=>console.log(err))

app.use(express.json());
app.use("/api/emp",emproute);
//localhost:3000/api/emp/register=>post
//localhost:3000/api/emp/login=>post
//localhost:3000/api/emp/getemp=>get
//localhost:3000/api/emp/updateemp=>put


app.listen(3000,()=>{
    console.log("server listenings on port 3000");
})