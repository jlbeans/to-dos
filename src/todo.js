import { format, isValid } from "date-fns";
//import { updateAllProjects } from "./localStorage";

export default class Todo {
  constructor(params) {
    this.title = params.title;
    this.priority = params.priority;
    this.completed = params.completed || false;
    this.dueDate = params.dueDate ? new Date(params.dueDate) : undefined;
    };

    update(params) {
      this.title = params.title;
      this.dueDate = new Date(params.dueDate);
      this.priority = params.priority;
      this.completed = params.completed;
      
       /*let allProjects = getAllProjects();
    updateAllProjects(allProjects)*/
    }

    toggleCompleted() {
      this.completed = !this.completed;
        /*let allProjects = getAllProjects();
    updateAllProjects(allProjects)*/
    }

    get formattedDueDate() {
      return isValid(this.dueDate) ? format(this.dueDate, 'MM/dd/yy') : '';
    }

};
