import { logoPath } from '../utils/dom.js';

export function Header() {
  return `
    <header class="hero" id="inicio">
      <nav class="topbar" aria-label="Navegación principal">
        <a class="logo-pill" href="#inicio" aria-label="Volver al inicio MMAC">
          <img src="${logoPath}" alt="Logo MMAC" />
        </a>
        <div class="nav-links">
          <a href="#agencia">Nuestra agencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <section class="hero-content">
        <p class="eyebrow">Agencia de comunicación estratégica sustentable</p>
        <h1>MMAC</h1>
        <div class="motto" aria-label="Mente Mundo Acción Conciencia">
          <span>Mente</span>
          <span>Mundo</span>
          <span>Acción</span>
          <span>Conciencia</span>
        </div>
        <p class="hero-copy">
          Conectamos propósito con estrategia para construir un futuro más sustentable junto a marcas conscientes.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#impacto">Conoce nuestro impacto</a>
          <a class="button ghost" href="#contacto">Hablemos</a>
        </div>
      </section>
    </header>
  `;
}
