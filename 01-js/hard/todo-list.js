/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.stack = new Array();
  }
  add(todo) {
    this.stack.push(todo);
  }
  remove(indexOfTodo) {
    this.stack.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    if(this.stack[index] === undefined){
      return;
    }else{
      this.stack[index] = updatedTodo;
    }
  }
  getAll() {
    return this.stack;
  }
  get(indexOfTodo) {
    if(this.stack[indexOfTodo] === undefined){
      return null;
    }else{
      return this.stack[indexOfTodo];
    }
  }
  clear() {
    this.stack = new Array();
  }
}
let todoList = new Todo();
module.exports = Todo;
