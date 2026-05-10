import { impactStats } from '../data/content.js';

export function Impact() {
  const cards = impactStats
    .map(
      (stat) => `
        <div class="stat-card">
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </div>
      `,
    )
    .join('');

  return `
    <section class="impact" id="impacto">
      <p class="section-kicker">Impacto MMAC</p>
      <div class="stats-grid">
        ${cards}
      </div>
    </section>
  `;
}
