function title() {
  const heading = document.createElement('div');
  heading.innerHTML = "To-dos";

  return heading;
}

document.body.appendChild(title());