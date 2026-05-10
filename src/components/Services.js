import { services } from '../data/content.js';

export function Services() {
  const serviceCards = services
    .map(
      (service, index) => `
        <article class="service-card">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <p>${service}</p>
        </article>
      `,
    )
    .join('');

  return `
    <section class="services" id="servicios">
      <div>
        <p class="section-kicker">Servicios</p>
        <h2>De la intención sustentable a una experiencia comunicacional coherente.</h2>
      </div>
      <div class="services-grid">
        ${serviceCards}
      </div>
    </section>
  `;
}
