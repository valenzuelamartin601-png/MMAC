import { quickAnswers } from '../data/content.js';
import { appendMessage } from '../utils/dom.js';

export function ContactChat() {
  const quickButtons = Object.keys(quickAnswers)
    .map((key) => `<button data-chat-preset="${key}" type="button">${key}</button>`)
    .join('');

  return `
    <section class="contact-zone" id="contacto">
      <article class="contact-card">
        <p class="section-kicker italic">Contáctanos</p>
        <h2>Ingresa tu email</h2>
        <form id="contact-form">
          <label for="email">Enter your email</label>
          <input id="email" name="email" placeholder="tu@email.com" type="email" />
          <button class="button dark full" type="submit">Enviar</button>
          <small>No se compartirá tu información. Nunca envíes tus contraseñas.</small>
        </form>
        <p class="form-status" id="contact-status" role="status"></p>
      </article>

      <article class="chatbot-card" aria-label="ChatBot MMAC">
        <h2>ChatBot</h2>
        <div class="chat-window" id="chat-window">
          <p class="message bot">¿En qué puedo ayudarte? Elige una opción o escribe tu consulta.</p>
        </div>
        <div class="quick-actions">
          ${quickButtons}
        </div>
        <div class="chat-input-row">
          <input id="chat-input" aria-label="Mensaje para el chatbot" placeholder="Escribe aquí..." />
          <button id="chat-send" type="button">➜</button>
        </div>
      </article>
    </section>
  `;
}

export function initContactForm() {
  const form = document.querySelector('#contact-form');
  const email = document.querySelector('#email');
  const status = document.querySelector('#contact-status');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!email.value.includes('@')) {
      status.textContent = 'Ingresa un correo válido para que podamos contactarte.';
      return;
    }

    status.textContent = '¡Gracias! Recibimos tu interés y pronto conectaremos contigo.';
    email.value = '';
  });
}

export function initChatBot() {
  const chatWindow = document.querySelector('#chat-window');
  const input = document.querySelector('#chat-input');
  const sendButton = document.querySelector('#chat-send');
  const presetButtons = [...document.querySelectorAll('[data-chat-preset]')];

  const sendChat = (preset) => {
    const question = preset || input.value.trim();
    if (!question) return;

    const normalized = question.toLowerCase();
    const answerKey = Object.keys(quickAnswers).find((key) => normalized.includes(key));
    const answer = answerKey
      ? quickAnswers[answerKey]
      : 'MMAC conecta propósito con estrategia para construir comunicación sustentable, clara y accionable.';

    appendMessage(chatWindow, 'user', question);
    appendMessage(chatWindow, 'bot', answer);
    input.value = '';
  };

  presetButtons.forEach((button) => {
    button.addEventListener('click', () => sendChat(button.dataset.chatPreset));
  });

  sendButton.addEventListener('click', () => sendChat());
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') sendChat();
  });
}
