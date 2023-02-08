
const createSideBar = () => {
  const sidenav = document.createElement('div');
  sidenav.className = 'sidebar';
  
  const header = document.createElement('div');
  header.className = 'projects-header';
  const title = document.createElement('h2');
  title.textContent = 'Projects';
  const newProjectBtn = document.createElement('button');
  newProjectBtn.innerHTML = `<i class="fa-solid fa-plus"></i>`;
  newProjectBtn.className = 'new-proj-button';

  header.appendChild(title);
  header.appendChild(newProjectBtn);
  
  const projects = document.createElement('ul');
  projects.className = 'all-projects';
  
  sidenav.appendChild(header);
  return sidenav;
};

export default createSideBar;
