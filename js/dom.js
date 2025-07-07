// dom.js
import { fetchUsers, deleteUser } from './api.js';
import { showForm } from './form.js';

export async function renderUserTable() {
  const tableBody = document.getElementById("userTableBody");
  tableBody.innerHTML = "";
  const users = await fetchUsers();

  users.forEach(user => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.extensionPhone}</td>
      <td>${user.phone}</td>
      <td>${user.enrollNumber}</td>
      <td>${user.dateOfAdmission}</td>
      <td>
        <button class="edit-btn" data-id="${user.id}">Editar</button>
        <button class="delete-btn" data-id="${user.id}">Eliminar</button>
      </td>
    `;

    tr.querySelector(".edit-btn").addEventListener("click", () => showForm("edit", user.id));
    tr.querySelector(".delete-btn").addEventListener("click", async () => {
      if (confirm("¿Seguro que deseas eliminar este usuario?")) {
        await deleteUser(user.id);
        renderUserTable();
      }
    });

    tableBody.appendChild(tr);
  });
}
