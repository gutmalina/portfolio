const createProject = (item) => {
  const project = projectTemplate.cloneNode(true);
  project.querySelector('.project__name').innerText = item.name
  project.querySelector('.project__img_bg').src = item.img_bg
  project.querySelector('.project__img_hover').src = item.img_project
  project.querySelector('.project__link_img').href = item.link_github_page
  project.querySelector('.project__link_code').href = item.link_github_code

  return project;
}

const renderInitialProjects = (element) => {
  const project = createProject(element)
  containerProjects.appendChild(project);
};

const render = () => {
  projectsArr.forEach(renderInitialProjects);
}

render();
