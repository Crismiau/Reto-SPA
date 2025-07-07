import { renderUserTable } from './dom.js';
import { setupFormEvents, showForm } from './form.js';

window.addEventListener('DOMContentLoaded', () => {
  renderUserTable();
  setupFormEvents();

  document.getElementById("addUserBtn").addEventListener("click", () => showForm("create"));
});
