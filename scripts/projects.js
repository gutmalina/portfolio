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

const render = () => {
  projectsArr.forEach(renderInitialProjects);
}

render();
