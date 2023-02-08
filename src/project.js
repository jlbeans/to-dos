
//import { getAllProjects, updateAllProjects } from "./localStorage";

export default class Project {
  constructor(params){
    this.title = params.title;
    this.description = params.description;
    this.todos = params.todos || [];
  } 

  update(params) {
    this.title = params.title;
    this.description = params.description;
       /*let allProjects = getAllProjects();
    updateAllProjects(allProjects)*/
  } 

  addTodo(todo) {
    this.todos.push(todo);
    /*let allProjects = getAllProjects();
    updateAllProjects(allProjects)*/
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
    /*let allProjects = getAllProjects();
    updateAllProjects(allProjects)*/
  }
};


