const createHeader = () => {
    const header = document.createElement('div');
    header.className = 'main-header';
    const title = document.createElement('h1')
    title.textContent = "ToDos";
    const introText = document.createElement('p');
    introText.textContent = "Experience the power of organization";
    header.appendChild(title);
    header.appendChild(introText);
    return header;
};

export default createHeader;