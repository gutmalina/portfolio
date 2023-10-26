const createProject = (item) => {
  const project = projectTemplate.cloneNode(true);
  project.querySelector('.project__img_bg').src = item.img_bg
  project.querySelector('.project__img_hover').src = item.img_project
  project.querySelector('.project__link_img').addEventListener('mousedown', ()=>{
    openPopup(item)
  })

  return project;
}

const renderInitialProjects = (element) => {
  const project = createProject(element)
  containerProjects.appendChild(project)
};

const render = (projects) => {
  projects.forEach(renderInitialProjects);
}

render(projectsArr);

const filterProjects = (type) => {
  const projectRendered = Array.from(document.querySelectorAll('.project'))
  projectRendered.map(item=> item.remove())
  if(type === "All projects"){
    render(projectsArr);
  }else{
    const arr = projectsArr.filter(project=> project.type === type)
    render(arr)
  }
}

typeProjects.map(item=>
  item.addEventListener('click', (e) => filterProjects(e.target.innerHTML)))
