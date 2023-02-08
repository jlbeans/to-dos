import defaultProject from "./default";
import createHeader from "./header";
import createSideBar from "./sidebar";
import { ProjectsDisplay } from "./projectDisplay";
//import { TodoDisplay } from "./todoDisplay";
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';


const loadHome = () => {
    if (!document.querySelector('.content')){
      const content = document.createElement('div');
      content.className = 'content';
 
      document.body.appendChild(content);
 
      content.appendChild(createHeader());
      content.appendChild(createSideBar());
    } else {
      const content = document.querySelector('.content');
      content.insertBefore(createHeader(), createSideBar());
    }
  };

const init = () => {
  loadHome();
  ProjectsDisplay.addAllProjects();
  let projectList = document.querySelector('.all-projects');
  let firstProject = projectList.firstElementChild;
  if (firstProject) {
    firstProject.firstElementChild.click();
  };
};

init();