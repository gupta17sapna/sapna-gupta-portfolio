function scrollToSection() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

function toggleSkill(element) {
  element.classList.toggle('expanded');
}

let currentProject = 0;
const projects = document.querySelectorAll('.project-item');
const projectsContainer = document.querySelector('.projects-container');

function showProject(index) {
  const projectWidth = projects[0].clientWidth;
  projectsContainer.style.transform = `translateX(${-index * projectWidth}px)`;
}

function showNext() {
  currentProject = (currentProject + 1) % projects.length;
  showProject(currentProject);
}

function showPrev() {
  currentProject = (currentProject - 1 + projects.length) % projects.length;
  showProject(currentProject);
}

showProject(currentProject);
