import { projects } from '../data/content.js';

export function AgencyProjects() {
  const projectButtons = projects
    .map(
      (project, index) => `
        <button
          class="project-tile ${index === 0 ? 'active' : ''}"
          data-project-index="${index}"
          type="button"
        >
          <span class="project-thumb" style="--tile-color: ${project.color}">${project.badge}</span>
          <span>${project.title}</span>
        </button>
      `,
    )
    .join('');

  return `
    <section class="split-section" id="agencia">
      <article class="agency-card">
        <p class="section-kicker">Nuestra Agencia</p>
        <h2>Comunicación sustentable para marcas que quieren actuar con conciencia.</h2>
        <p>
          Nos enfocamos en la sustentabilidad para ayudar a las marcas con el consumo consciente y la responsabilidad
          social de una forma más clara.
        </p>
        <ul>
          <li>+ Marcas conscientes</li>
          <li>100% Transparencia en procesos</li>
        </ul>
        <div class="hands-card" aria-label="Imagen conceptual de naturaleza y cuidado ambiental"></div>
        <a class="button dark" href="#impacto">Conoce nuestro impacto</a>
      </article>

      <article class="projects-panel" id="proyectos">
        <p class="section-kicker italic">Proyectos</p>
        <h2>Ideas con impacto visible</h2>
        <div class="project-list">
          ${projectButtons}
        </div>
        <div class="project-detail" id="project-detail">
          <span>Proyecto destacado</span>
          <h3>${projects[0].title}</h3>
          <p>${projects[0].description}</p>
        </div>
      </article>
    </section>
  `;
}

export function initProjectSelector() {
  const buttons = [...document.querySelectorAll('[data-project-index]')];
  const detail = document.querySelector('#project-detail');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const project = projects[Number(button.dataset.projectIndex)];
      buttons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      detail.querySelector('h3').textContent = project.title;
      detail.querySelector('p').textContent = project.description;
    });
  });
}
