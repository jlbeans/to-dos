//import { getAllProjects } from "./localStorage";
import { defaultProject} from "./default";
import { TodoDisplay } from "./todoDisplay";

const ProjectsDisplay = (() => {
  const projList = document.createElement('ul');
  projList.className = 'all-projects';
  const projContainer = document.createElement('div');
  projContainer.className = "printed-proj";
  const projTitle = document.createElement('h2'),
        projDesc = document.createElement('p'),
        projTodos = document.createElement('div');
        projTodos.className = 'proj-todos';
  
  let currentProject;
  let currentProjectIndex;
  let allProjects = [];
    
    const addAllProjects = () => {
      getProjects().push(defaultProject());
      buildProjectList(allProjects);
    }; 

    const buildProjectList = (projects) => {
      let sidebar = document.querySelector('.sidebar');
      sidebar.appendChild(projList);
      projList.innerHTML = projects
      .map((project, i) => {
        return `<li><button class='proj-btn' data-index='${i}'>${project.title}</button></li>`;
        }) 
        .join('');
      let projectBtn = document.querySelector('.proj-btn');
      projectBtn.addEventListener('click', selectProject);
    };
    
    const selectProject = (e) => {
      currentProjectIndex = e.target.dataset.index;
      currentProject = getProjects()[currentProjectIndex];
      printCurrentProject(currentProject);
    };

    const printCurrentProject = (project) => {
      let content = document.querySelector('.content');
      content.appendChild(projContainer);
      projTitle.textContent = project.title;
      projDesc.textContent = project.description;
      
      projContainer.appendChild(projTitle);
      projContainer.appendChild(projDesc);
      projContainer.appendChild(projTodos);
      
      for (let i=0;i < project.todos.length;i++){
        TodoDisplay.printTodo(project.todos[i], i);
      };
    };

    const getProjects = () => {
      return allProjects;
    }

    const getCurrentProject = () => {
      return currentProject;
    };

    return { addAllProjects, getCurrentProject, printCurrentProject };
})();

export { ProjectsDisplay };

