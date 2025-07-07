// form.js
import { createUser, updateUser, fetchUsers } from "./api.js";
import { renderUserTable } from "./dom.js";

let editingUserId = null;

export function showForm(mode, userId = null) {
  const form = document.getElementById("userForm");
  form.reset();
  editingUserId = null;

  if (mode === "edit" && userId) {
    editingUserId = userId;
    fetchUsers().then((users) => {
      const user = users.find((u) => u.id == userId);
      if (user) {
        form.name.value = user.name;
        form.email.value = user.email;
        form.phone.value = user.phone;
        form.enrollNumber.value = user.enrollNumber;
        form.dateOfAdmission.value = user.dateOfAdmission;
        form.extensionPhone.value = user.extensionPhone;
      }
    });
  }

  document.getElementById("userModal").style.display = "flex";
}

export function setupFormEvents() {
  const form = document.getElementById("userForm");

  form.onsubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      extensionPhone: form.extensionPhone.value.trim(),
      phone: form.phone.value.trim(),
      enrollNumber: form.enrollNumber.value.trim(),
      dateOfAdmission: form.dateOfAdmission.value,
    };

    if (!user.name || !user.email || !user.phone || !user.extensionPhone) {
      alert("Todos los campos son obligatorios"); // AQUI A PESAR DE QUE EN EL HTML TENEMOS UN REQUERIDE AQUI AUN ASI VERIFACAMOS QUE EL USUARIO SI INGRESE UN DATO 
      return;
    }
  
    if (!/^[a-zA-Z\s]+$/.test(user.name)) {
      alert("Error, debes ingregar solo letras") // AQUI HACEMOS UN MANEJO DE ERRORES PARA QUE EL USUARIO INGRESE TEXTO EN VEZ DE LETRAS EN LA PROPIEDAD DE NOMBRE
      return;
    }  // SI NO COLOCAMOS RETURN, EL VA A SEGUIR EJECUTANDO EL CODIGO, SI SI LO PONEMOS EL VA A DECIR, HEY TENGO QUE PARAR PQ SI NO VOY A EJECUTAR EL CODIGO DE ABAJO ADEMÁS AGREGO AL USUARIO CON NOMBRE EN NUMEROS, POR ENDE LE HARE CASO A MI CREADOR Y VOY A PARAR PARA QUE MI CREADOR ESTE FELIZ Y NO ME REGAÑE 

    if (editingUserId) {
      await updateUser(editingUserId, user);
    } else {
      await createUser(user);
    }

    document.getElementById("userModal").style.display = "none";
    renderUserTable();
  };
}
