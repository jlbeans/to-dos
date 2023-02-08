const TodoDisplay = (() => {
    const printTodo = (todo, index) => {
        const projTodos = document.querySelector('.proj-todos');
        const card = document.createElement('div');
        card.className = 'todo-card';
        projTodos.appendChild(card);
        card.appendChild(primaryContent(todo, index));
        card.appendChild(dateElement(todo, index));
        showPriority(card, todo.priority);
    };

    const primaryContent = (todo, index) => {
        const section = document.createElement('div');
        section.className = 'card-primary';
        
        const primaryText = document.createElement('div');
        primaryText.className = 'card-checkbox-title';
        const checkBoxDiv = document.createElement('div');
        const checkBox = document.createElement('input');
        checkBoxDiv.appendChild(checkBox);
        checkBox.type = 'checkbox';
        checkBox.id = `checkbox${index}`;
        checkBox.checked = todo.completed;
        const todoTitle = document.createElement('p');
        todoTitle.className = 'card-title';
        todoTitle.textContent = todo.title;
        todoTitle.id = `title${index}`;

        primaryText.appendChild(checkBoxDiv);
        primaryText.appendChild(todoTitle);

        lineThroughCompleted(todo.completed, primaryText);

        const cardBtns = document.createElement('div');
        const editBtn = document.createElement('button');
        editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i`;
        editBtn.className = 'card-edit-btn';
        editBtn.id = `edit${index}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteBtn.className = 'card-del-btn';
        deleteBtn.id = `del${index}`;
        
        cardBtns.appendChild(editBtn);
        cardBtns.appendChild(deleteBtn);

        section.appendChild(primaryText);
        section.appendChild(cardBtns);
        
        return section;
    }
        
    const dateElement = (todo, index) => {
        const date = document.createElement('div');
        date.className = 'card-date';
        date.textContent = `Due: ${todo.formattedDueDate}`;
        date.id = `date${index}`;
        
        return date;
    };

    const lineThroughCompleted = (completed, text) => {
        if (completed) {
            text.style.textDecoration = 'line-through';
        }
    };

    const showPriority = (element, priority) => {
        switch(priority){
            case 'critical':
                element.style = 'border: 1px solid red;';
                break;
            case 'high':
                element.style = 'border: 1px solid orange;';
                break;
            case 'medium':
                element.style = 'border: 1px solid yellow;';
                break;
            default:
                element.style = 'border: 1px solid green;';
        };
    };
    
      return { printTodo };
})();

  export { TodoDisplay };