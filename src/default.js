
import { add } from "date-fns";
import Project from "./project";
import Todo from "./todo";
//import { updateAllProjects } from "./localStorage";

function defaultProject() {
  const project = new Project({
    title: "Welcome",
    description: "Welcome to todos",
  });
    
  const first = new Todo({
    title: 'Welcome to Todos',
    dueDate: add(Date.now(), { days: 1 }),
    priority: 'critical',
  });

  const second = new Todo({
    title: "To create a new project, click the '+' button on the left",
    dueDate: add(Date.now(), { days: 2 }),
    priority: 'high',
  });

  const third = new Todo({
    title: "To create a new todo, click the '+' button at the top",
    dueDate: add(Date.now(), { days: 3 }),
    priority: 'medium',
  });

  [first, second, third].forEach((todo) => project.addTodo(todo));
  return project;
  };

export { defaultProject };
