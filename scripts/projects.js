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
  switch(element.type){
    case 'lead-project':
      containerLeadProjects.appendChild(project)
      break;
    case 'test-project':
      containerTestProjects.appendChild(project)
      break;
    case 'learn-project':
      containerLearnProjects.appendChild(project)
      break;
    default: return;
  }
};

const render = () => {
  projectsArr.forEach(renderInitialProjects);
}

render();
