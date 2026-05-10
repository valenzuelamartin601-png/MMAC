export const logoPath = './imagenes/logo_mmac.png';

export function setText(element, text) {
  element.textContent = text;
}

export function appendMessage(container, from, text) {
  const message = document.createElement('p');
  message.className = `message ${from}`;
  message.textContent = text;
  container.appendChild(message);
  container.scrollTop = container.scrollHeight;
}
