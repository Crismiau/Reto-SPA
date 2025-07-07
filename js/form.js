import { createUser, fetchUsers, updateUser } from "./api";
import { closeModal } from "./modal";
import { renderUserTable } from "./dom";

let editingUserId = null;

export function showForm(mode, userId = null) {
  document.getElementById("userForm").reset();
  editingUserId = null;

  if (mode === "edit" && userId) {
    editingUserId = userId;
    fetchUsers().then((users) => {
      const user = users.find((u) => u.id == userId);
      if (user) {
        document.getElementById("name").value = user.name;
        document.getElementById("email").value = user.email;
        document.getElementById("extension").value = user.extension;
        document.getElementById("phone").value = user.phone;
        document.getElementById("enrollNumber").value = user.enrollNumber;
        document.getElementById("dateOfAdmission").value = user.dateOfAdmission;
      }
    });
  }

  document.getElementById("userModal").style.display = "block";
}

export function setupFormEvents() {
  const form = document.getElementById("userForm");

  form.onsubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      enrollNumber: form.enrollNumber.value.trim(),
      dateOfAdmission: form.dateOfAdmission.value,
    };

    if (!user.name || !user.email || !user.phone) {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (editingUserId) {
      await updateUser(editingUserId, user);
    } else {
      await createUser(user);
    }

    closeModal();
    renderUserTable();
  };
}
