import { team } from '../data/content.js';

export function Team() {
  const members = team
    .map(
      (member) => `
        <article class="member-card">
          <div class="avatar" aria-hidden="true"></div>
          <h3>${member}</h3>
        </article>
      `,
    )
    .join('');

  return `
    <section class="team" id="equipo">
      <p class="section-kicker centered">Nuestro Equipo</p>
      <div class="team-grid">
        ${members}
      </div>
      <a class="read-post" href="#nosotros">Read the full post</a>
    </section>
  `;
}
