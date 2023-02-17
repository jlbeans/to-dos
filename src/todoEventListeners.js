import { toggleCompleted, lineThroughCompleted } from './todo.js';
import { ProjectsDisplay } from "./projectDisplay";

const addEventListeners = (index) => {
    document.querySelector(`#checkbox${index}`).addEventListener('click', function() {
        const todo = ProjectsDisplay.getCurrentProject().todos[index];
        todo.toggleCompleted();
        todo.lineThroughCompleted(this.parentNode.nextElementSibling);
    });

    document.querySelector(`#del${index}`).addEventListener('click', function() {
        ProjectsDisplay.getCurrentProject().removeTodo(index);
        document.querySelector('.proj-todos')
        .removeChild(this.parentNode.parentNode.parentNode.parentNode);
   });
    
    document.querySelector(`#exp${index}`).addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'block'){
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });

    document.querySelector(`#form${index}`).addEventListener('submit', function() {
        e.preventDefault();
        const todo = ProjectsDisplay.getCurrentProject().todos[index];
        todo.update({
            title: this.querySelector(".edit-todo-title").value,
            dueDate: this.querySelector(".edit-todo-date").value,
            priority: this.querySelector(".edit-todo-priority").value,
        })
       const card = this.parentNode.parentNode;
       card.className = `todo-card ${todo.priority}`;
       const primary = card.firstChild;
       primary.className = 'card-primary';
       const cardTitle = primary.querySelector('.card-title');
       cardTitle.textContent = todo.title;
       const date = card.firstChild.nextSibling;
       date.className = 'card-date';
       date.textContent = `Due: ${todo.formattedDueDate}`;
       const button = card.firstChild.nextSibling.nextSibling;
       button.className = 'expand-collapse-btn';
       const content = card.firstChild.nextSibling.nextSibling.nextSibling;
       content.className = 'collapsible';
       button.click();
    });
};

export default addEventListeners;