const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Moksh:luCe3gfz03W0QIsH@cluster0.yzxbf.mongodb.net/todos");

const todoSchema= mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema);

module.exports= {
    todo
}