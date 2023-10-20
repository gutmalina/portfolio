const createProject = (item) => {
  const project = projectTemplate.cloneNode(true);
  const about = project.querySelector('.project__subtitle')
  project.querySelector('.project__img_bg').src = item.img_bg
  project.querySelector('.project__img_hover').src = item.img_project
  project.querySelector('.project__link_img').href = item.link_github_page
  project.querySelector('.project__link_code').href = item.link_github_code
  about.innerHTML = item.about
  project.querySelector('.project__about').addEventListener('click', ()=>{
  about.classList.toggle('project__subtitle_visible')
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
