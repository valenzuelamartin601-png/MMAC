import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import logoMmac from '../imagenes/logo_mmac.png';
import './styles.css';

const projects = [
  {
    title: 'Moda circular Paris',
    badge: 'Moda circular',
    description: 'Estrategia para visibilizar reutilización, economía circular y decisiones de compra conscientes.',
    color: '#1f78ad',
  },
  {
    title: 'Menos plástico más ahorro',
    badge: 'Menos plástico',
    description: 'Campaña de hábitos sostenibles que convierte la reducción de residuos en valor para la marca.',
    color: '#f63523',
  },
];

const pillars = [
  {
    icon: '☷',
    title: 'Enfoque integral',
    text: 'Visión basada en la experiencia y el análisis estratégico para una práctica integral y una gestión eficaz.',
  },
  {
    icon: '⌕',
    title: 'Análisis y gestión',
    text: 'Detectamos oportunidades y riesgos para diseñar estrategias efectivas que generan impactos reales en nuestros clientes.',
  },
  {
    icon: '📣',
    title: 'Conexión estratégica',
    text: 'Conectamos marcas con sus públicos clave a través de estrategias y redes que generan confianza, relevancia y resultados.',
  },
  {
    icon: '🌎',
    title: 'Servicio personalizado',
    text: 'Servicios a la medida con equipos multidisciplinarios que acompañan a cada cliente en cada etapa.',
  },
];

const services = [
  'Estrategia comunicacional sustentable',
  'Gestión reputacional y responsabilidad social',
  'Campañas de consumo consciente',
  'Relación con comunidades y stakeholders',
  'Diseño de contenidos para marcas conscientes',
  'Transparencia en procesos y narrativa de impacto',
];

const team = ['Ailyne Caniuguir', 'Mateo Bernales', 'Camila Aguilera', 'Martín Valenzuela'];

const quickAnswers = {
  servicios: 'Diseñamos estrategias de comunicación sustentable, campañas conscientes, gestión reputacional y contenido con propósito.',
  proyectos: 'Trabajamos proyectos como Moda Circular Paris y Menos Plástico Más Ahorro, enfocados en hábitos responsables.',
  contacto: 'Déjanos tu correo en el formulario y coordinamos una primera conversación para conocer tu marca.',
};

function App() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [email, setEmail] = useState('');
  const [contactStatus, setContactStatus] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { from: 'bot', text: '¿En qué puedo ayudarte? Elige una opción o escribe tu consulta.' },
  ]);
  const [chatText, setChatText] = useState('');

  const impactStats = useMemo(
    () => [
      { value: '+', label: 'Marcas conscientes' },
      { value: '100%', label: 'Transparencia en procesos' },
      { value: '4', label: 'Ideas fuerza: Mente, Mundo, Acción y Conciencia' },
    ],
    [],
  );

  const handleContact = (event) => {
    event.preventDefault();
    if (!email.includes('@')) {
      setContactStatus('Ingresa un correo válido para que podamos contactarte.');
      return;
    }
    setContactStatus('¡Gracias! Recibimos tu interés y pronto conectaremos contigo.');
    setEmail('');
  };

  const sendChat = (preset) => {
    const question = preset || chatText.trim();
    if (!question) return;

    const normalized = question.toLowerCase();
    const answerKey = Object.keys(quickAnswers).find((key) => normalized.includes(key));
    const answer = answerKey
      ? quickAnswers[answerKey]
      : 'MMAC conecta propósito con estrategia para construir comunicación sustentable, clara y accionable.';

    setChatMessages((messages) => [
      ...messages,
      { from: 'user', text: question },
      { from: 'bot', text: answer },
    ]);
    setChatText('');
  };

  return (
    <div className="app-shell">
      <header className="hero" id="inicio">
        <nav className="topbar" aria-label="Navegación principal">
          <a className="logo-pill" href="#inicio" aria-label="Volver al inicio MMAC">
            <img src={logoMmac} alt="Logo MMAC" />
          </a>
          <div className="nav-links">
            <a href="#agencia">Nuestra agencia</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <section className="hero-content">
          <p className="eyebrow">Agencia de comunicación estratégica sustentable</p>
          <h1>MMAC</h1>
          <div className="motto" aria-label="Mente Mundo Acción Conciencia">
            <span>Mente</span>
            <span>Mundo</span>
            <span>Acción</span>
            <span>Conciencia</span>
          </div>
          <p className="hero-copy">
            Conectamos propósito con estrategia para construir un futuro más sustentable junto a marcas conscientes.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#impacto">Conoce nuestro impacto</a>
            <a className="button ghost" href="#contacto">Hablemos</a>
          </div>
        </section>
      </header>

      <main>
        <section className="split-section" id="agencia">
          <article className="agency-card">
            <p className="section-kicker">Nuestra Agencia</p>
            <h2>Comunicación sustentable para marcas que quieren actuar con conciencia.</h2>
            <p>
              Nos enfocamos en la sustentabilidad para ayudar a las marcas con el consumo consciente y la responsabilidad
              social de una forma más clara.
            </p>
            <ul>
              <li>+ Marcas conscientes</li>
              <li>100% Transparencia en procesos</li>
            </ul>
            <div className="hands-card" aria-label="Imagen conceptual de naturaleza y cuidado ambiental" />
            <a className="button dark" href="#impacto">Conoce nuestro impacto</a>
          </article>

          <article className="projects-panel" id="proyectos">
            <p className="section-kicker italic">Proyectos</p>
            <h2>Ideas con impacto visible</h2>
            <div className="project-list">
              {projects.map((project) => (
                <button
                  className={`project-tile ${activeProject.title === project.title ? 'active' : ''}`}
                  key={project.title}
                  onClick={() => setActiveProject(project)}
                  type="button"
                >
                  <span className="project-thumb" style={{ '--tile-color': project.color }}>{project.badge}</span>
                  <span>{project.title}</span>
                </button>
              ))}
            </div>
            <div className="project-detail">
              <span>Proyecto destacado</span>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.description}</p>
            </div>
          </article>
        </section>

        <section className="impact" id="impacto">
          <p className="section-kicker">Impacto MMAC</p>
          <div className="stats-grid">
            {impactStats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about" id="nosotros">
          <p className="section-kicker centered">Nosotros</p>
          <h2>Una mirada integral para comunicar con propósito.</h2>
          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.title}>
                <div className="icon-circle" aria-hidden="true">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
          <div className="brand-line">
            <p>
              En MMAC, creemos en el poder de la comunicación para generar un impacto positivo en las personas, las marcas
              y el planeta. <strong>Conectamos propósito con estrategia para construir un futuro más sustentable.</strong>
            </p>
            <img src={logoMmac} alt="MMAC agencia de comunicación estratégica sustentable" />
          </div>
        </section>

        <section className="services" id="servicios">
          <div>
            <p className="section-kicker">Servicios</p>
            <h2>De la intención sustentable a una experiencia comunicacional coherente.</h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{service}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-zone" id="contacto">
          <article className="contact-card">
            <p className="section-kicker italic">Contactanos</p>
            <h2>Ingresa tu email</h2>
            <form onSubmit={handleContact}>
              <label htmlFor="email">Enter your email</label>
              <input
                id="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="tu@email.com"
                type="email"
                value={email}
              />
              <button className="button dark full" type="submit">Enviar</button>
              <small>No se compartirá tu información. Nunca envíes tus contraseñas.</small>
            </form>
            {contactStatus && <p className="form-status" role="status">{contactStatus}</p>}
          </article>

          <article className="chatbot-card" aria-label="ChatBot MMAC">
            <h2>ChatBot</h2>
            <div className="chat-window">
              {chatMessages.map((message, index) => (
                <p className={`message ${message.from}`} key={`${message.from}-${index}`}>{message.text}</p>
              ))}
            </div>
            <div className="quick-actions">
              {Object.keys(quickAnswers).map((key) => (
                <button key={key} onClick={() => sendChat(key)} type="button">{key}</button>
              ))}
            </div>
            <div className="chat-input-row">
              <input
                aria-label="Mensaje para el chatbot"
                onChange={(event) => setChatText(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && sendChat()}
                placeholder="Escribe aquí..."
                value={chatText}
              />
              <button onClick={() => sendChat()} type="button">➜</button>
            </div>
          </article>
        </section>

        <section className="team" id="equipo">
          <p className="section-kicker centered">Nuestro Equipo</p>
          <div className="team-grid">
            {team.map((member) => (
              <article className="member-card" key={member}>
                <div className="avatar" aria-hidden="true" />
                <h3>{member}</h3>
              </article>
            ))}
          </div>
          <a className="read-post" href="#nosotros">Read the full post</a>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
