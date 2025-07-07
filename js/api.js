// api.js
const API_URL = "http://localhost:3001/users";


// ESTA FUNCION ES EL GET DE UNA FORMA MÁS SIMPLIFICADA, AQUI LEEEMOS TODO LO QUE HAY DENTRO DEL JSON
export async function fetchUsers() {
  try {
    const res = await fetch(API_URL);
    return await res.json();
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  } 
}
// EN ESTA FUNCION LO QUE HACEMOS ES CREAR UN NUEVO USER MEIDANTE EL POST Y TODO LO RESUMIMOS EN UNA FUNCION
export async function createUser(user) {
  try {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user) // AQUI UTILIZAMOS EL ARGUMENTO USER PQ DENTRO DE USER ESTA LA ESTRUCUTURA DEL JSON 
  });
  return await res.json();
 } catch (error) {
    alert("Ocurrio un error", error)
 } // aAQUI LO QUE HACEMOS ES QUE NOS RETORNA EL JSON 
}
/// AQUI CREAMOS LA FUNCION DE ACTUALIZAR SIEMPRE PERO SIEMPRE SE DEBE COLOCAR EL ARGUMENTO DE ID Y OTRO RELACIONADO CON UPDTAES, PERO SIEMPREEEEEE CON EL ID
export async function updateUser(id, updates) {
  try {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates), 
  });
  return await res.json();
  } catch (error) {
    alert("ocurrio un error", error)
    console.log("Ocurrio un error", error)
  }
}
// AQUI CREAMOS LA FUNCION DE DELETE AQUI SOLAMENTE NOS SIRVE EL ARGUMENTO DE ID
export async function deleteUser(id) { 
  try {
  return await fetch(`${API_URL}/${id}`, {
     method: "DELETE" 
    }
    );
  } catch (error) {
    alert("Ocurrio un error", error)
    console.log("Ocurrio un error", error)
  }
  }