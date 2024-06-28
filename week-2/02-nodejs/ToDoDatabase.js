const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

class Todo{

  static id = 0;

  constructor(title, description){
    this.id = ++Todo.id;
    this.title = title;
    this.completed = false;
    this.description = description;
  }

  static toDoList = [];

  static getTodo(id){
    let toDo = Todo.toDoList.filter((todo) => todo.id === id);
    toDo = toDo[0];
    if(toDo === undefined){
      return {
        "status": 404
      }
    }else{
      return {
        "status": 200,
        "todo": {
          "id": toDo.id,
          "title": toDo.title, 
          "completed": toDo.completed,
          "description": toDo.description
        }
      }
    }
  }

  static postTodo(toDo){
    Todo.toDoList.push(toDo);
    return {
      "status": 201,
      "id" : toDo.id
    }
  }
  
  putTodo(id){
    for(let i = 0; i < Todo.toDoList.length; i++){
      if(Todo.toDoList[i].id === id){
        //Todo.toDoList[i] = this;
        Todo.toDoList[i].completed = true;
        return {
          "status": 200
        }
      }
    }
    return {
      "status": 404
    }
  }

  static deleteTodo(id){
    for(let i = 0; i < Todo.toDoList.length; i++){
      if(Todo.toDoList[i].id === id){
        Todo.toDoList.splice(i, 1);
        return {
          "status": 200
        }
      }
    }
    return {
      "status": 404
    }
  }
} 

app.get("/todos", (req, res) => {
  res.status(200).json(Todo.toDoList);
});

app.get("/todos/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  let getReq = Todo.getTodo(id);
  res.status(getReq.status).json(getReq.todo);
});

app.post("/todos", (req, res) => {
  let todo = new Todo(req.body.title, req.body.description);
  let postReq = Todo.postTodo(todo);
  res.status(postReq.status).json({
    "id" : postReq.id
  });
});

app.post("/todos/publish", (req, res) => {
  fs.writeFile("ToDoDatabase.txt", JSON.stringify(Todo.toDoList), (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  })
});

app.put("/todos/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  let todo = new Todo(req.body.title, req.body.description);
  let putReq = todo.putTodo(id);
  res.sendStatus(putReq.status);
});

app.delete("/todos/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  res.sendStatus(Todo.deleteTodo(id).status);
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
module.exports = app;