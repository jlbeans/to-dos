import addEventListeners from './todoEventListeners';

const TodoDisplay = (() => {
    const printTodo = (todo, index) => {
        const projTodos = document.querySelector('.proj-todos');
        const card = document.createElement('div');
        card.className = `todo-card ${todo.priority}`;
        const expandCollBtn = document.createElement('button');
        expandCollBtn.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
        expandCollBtn.className = 'expand-collapse-btn';
        expandCollBtn.id = `exp${index}`;
        
        projTodos.appendChild(card);
        card.appendChild(primaryContent(todo, index));
        card.appendChild(dateElement(todo, index));
        card.appendChild(expandCollBtn);
        card.appendChild(collapsibleContent(todo, index));
        
        addEventListeners(index);
    };

    const primaryContent = (todo, index) => {
        const section = document.createElement('div');
        section.className = 'card-primary';
        const checkBoxAndTitle = document.createElement('div');
        checkBoxAndTitle.className = 'card-checkbox-title';
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
        lineThroughCompleted(todo.completed, todoTitle);

        checkBoxAndTitle.appendChild(checkBoxDiv);
        checkBoxAndTitle.appendChild(todoTitle);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteBtn.className = 'card-del-btn';
        deleteBtn.id = `del${index}`;

        section.appendChild(checkBoxAndTitle);
        section.appendChild(deleteBtn);
        
        return section;
    }
        
    const dateElement = (todo, index) => {
        const date = document.createElement('div');
        date.className = 'card-date';
        date.textContent = `Due: ${todo.formattedDueDate}`;
        date.id = `date${index}`;
        
        return date;
    };

    const collapsibleContent = (todo, index) => {
        const container = document.createElement('div');
        container.className = 'collapsible';
        const form = document.createElement('form');
        form.className = 'todo-form';
        form.id = `form${index}`;
        form.action = 'index.html';
        const label = document.createElement('label');
        label.for = `title${index}`;
        label.textContent = 'Title:';
        const titleInput = document.createElement('input');
        titleInput.className = 'edit-todo-title';
        titleInput.id = `title${index}`;
        titleInput.value = todo.title;
        titleInput.type = 'textarea';
        titleInput.required = 'true';
        const dueDateAndPriority = document.createElement('div');
        dueDateAndPriority.className = 'edit-date-and-priority';
        dueDateAndPriority.appendChild(dueDateInput(todo, index));
        dueDateAndPriority.appendChild(priorityInput(todo, index));
        const submitBtn = document.createElement('button');
        submitBtn.className = 'submit';
        submitBtn.id = `sub${index}`;
        submitBtn.type = 'submit';
        submitBtn.textContent = 'Save';
       
        form.appendChild(label);
        form.appendChild(titleInput);
        form.appendChild(dueDateAndPriority);
        form.appendChild(submitBtn);

        container.appendChild(form);
        return container;
    };

    const dueDateInput = (todo, index) => {
		const container = document.createElement("div");
		const label = document.createElement("label");
		const input = document.createElement("input");

		label.for = `date${index}`;
		label.textContent = "Due:";
		input.className = "edit-todo-date";
		input.id = `date${index}`;
		input.value = todo.stringifiedDueDate;
		input.type = "date";
		input.required = "true";

		container.appendChild(label);
		container.appendChild(input);
		
        return container;
	};

	const priorityInput = (todo, index) => {
		const container = document.createElement("div");
		const label = document.createElement("label");
        label.for = `priority${index}`;
		label.textContent = "Priority:";
		const select = document.createElement("select");
        select.className = "edit-todo-priority";
		select.value = todo.priority;
		select.id = `priority${index}`;
		const critical = document.createElement("option");
        critical.value = "critical";
		critical.textContent = "Critical";
		const high = document.createElement("option");
        high.textContent = "High";
		high.value = "high";
		const medium = document.createElement("option");
        medium.textContent = "Medium";
		medium.value = "medium";
		const low = document.createElement("option");
        low.textContent = "Low";
		low.value = "low";

		select.add(critical);
		select.add(high);
		select.add(medium);
		select.add(low);
        select.selectedIndex = ['critical', 'high', 'medium', 'low'].findIndex(
            (el) => el === todo.priority
          );

        container.appendChild(label);
		container.appendChild(select);

		return container;
	};

    const lineThroughCompleted = (completed, element) => {
        if (completed) {
            element.style.textDecoration = 'line-through';
        }
    };
    
      return { printTodo };
})();

  export { TodoDisplay };