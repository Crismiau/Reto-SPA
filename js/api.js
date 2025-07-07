const API_URL = "http://localhost:3001/"

export async function fetchUsers() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error ("Error al cargar un nuevo usuario");
        return await res.json()
    } catch (error) {
        alert(error.message);
        return [];
    }
}

export async function createUser(user) {
    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(user)
        });
        return await res.json()        
    } catch (error) {
        alert("Error al crear un nuevo usuario", error);
    }
}

export async function updateUser(id, user) {
    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(user)
        });
        return await res.json()

    } catch (error) {
        alert("OCURRIO UN ERROR AL ACTUALIZAR", error)
    }
}

export async function deleteUser(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });
    } catch (error) {
        alert("Error al eliminar el usuario", error)
    }
}


console.log("holi")