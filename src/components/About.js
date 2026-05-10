import { pillars } from '../data/content.js';
import { logoPath } from '../utils/dom.js';

export function About() {
  const pillarCards = pillars
    .map(
      (pillar) => `
        <article class="pillar-card">
          <div class="icon-circle" aria-hidden="true">${pillar.icon}</div>
          <h3>${pillar.title}</h3>
          <p>${pillar.text}</p>
        </article>
      `,
    )
    .join('');

  return `
    <section class="about" id="nosotros">
      <p class="section-kicker centered">Nosotros</p>
      <h2>Una mirada integral para comunicar con propósito.</h2>
      <div class="pillars-grid">
        ${pillarCards}
      </div>
      <div class="brand-line">
        <p>
          En MMAC, creemos en el poder de la comunicación para generar un impacto positivo en las personas, las marcas
          y el planeta. <strong>Conectamos propósito con estrategia para construir un futuro más sustentable.</strong>
        </p>
        <img src="${logoPath}" alt="MMAC agencia de comunicación estratégica sustentable" />
      </div>
    </section>
  `;
}
