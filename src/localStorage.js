

function getAllProjects() {
   return JSON.parse(localStorage.getItem("allProjects") || "[]");
}

function updateAllProjects(allProjects) {
   localStorage.setItem('allProjects', JSON.stringify(allProjects));
}


export { 
    getAllProjects, 
    updateAllProjects, 
    }; 