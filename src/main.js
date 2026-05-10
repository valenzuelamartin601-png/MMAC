import { Header } from './components/Header.js';
import { AgencyProjects, initProjectSelector } from './components/AgencyProjects.js';
import { Impact } from './components/Impact.js';
import { About } from './components/About.js';
import { Services } from './components/Services.js';
import { ContactChat, initChatBot, initContactForm } from './components/ContactChat.js';
import { Team } from './components/Team.js';

function renderApp() {
  const app = document.querySelector('#app');

  app.innerHTML = `
    <div class="app-shell">
      ${Header()}
      <main>
        ${AgencyProjects()}
        ${Impact()}
        ${About()}
        ${Services()}
        ${ContactChat()}
        ${Team()}
      </main>
    </div>
  `;

  initProjectSelector();
  initContactForm();
  initChatBot();
}

renderApp();
