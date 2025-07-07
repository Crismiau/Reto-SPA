import { deleteUser, fetchUsers } from "./api";
import { showForm } from "./form.js";


const tableBody = document.getElementById("userTableBody");

export async function renderUserTable() {
    const users = await fetchUsers();
    tableBody.innerHTML = "";

    users.forEach(user => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.extensionPhone}</td>
            <td>${user.phone}</td>
            <td>${user.enrollNumber}</td>
            <td>${user.dateOfAdmission}</td>
            
            <td>
            <button class="action-btn edit-btn" data-id ="${user.id}">Editar</button>
            <button class="action-btn delete-btn" data-id="${user.id}">Eliminar</button>
            </td>
            `
            tableBody.appendChild(tr)
    });

}

document.querySelector(".edit-btn").forEach(btn => {
    btn.onclick = () => showForm("edit", btn.dataset.id);

});


document.querySelector(".delete-btn").forEach(btn => {
    btn.onclick = async () => {
        const confirmDelete = confirm("¿Deseas eliminar este usuario? 🤨")

        if (confirmDelete) {
            await deleteUser(btn.dataset.id);
            renderUserTable();
        }
    }
})