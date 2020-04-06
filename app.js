var express = require("express");
var app = express();
var bodyParser= require("body-parser");

const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var task = ["read","pray jax sleeps"];
var complete = ["nothing"];

app.set('view engine', 'ejs');

app.get("/url", (req,res,next) => {
    res.json(["Trevor", "Bob", "Sally"]);
});



app.get("/", (req, res)=>{
    res.render("todo", { task: task, complete: complete });
});

app.get("/test", (req,res) => {
    res.render("boot-test");
});

app.get("/bye", (req, res)=>{
    res.render("bye");
});

app.get("/todo", (req,res)=>{
    res.render("todo", { task: task, complete: complete });
});

app.post("/addtask", (req,res)=>{
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});

app.post("/removetask", (req,res)=>{
    var completedTask = req.body.check;

    if(typeof completedTask==="string"){
        complete.push(completedTask);
        task.splice(task.indexOf(completedTask, 1))
    } else if(typeof completedTask==="object"){
        for(var i = 0; i < completedTask.length;i++){
            complete.push(completedTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");;
})

app.listen(port, () => {
    console.log("Server running on port 3000");
});