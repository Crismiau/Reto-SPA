import { showForm } from "./form";

export function setupEvents() {
    document.getElementById("btnAddUser").addEventListener("click", () => {
        showForm("create")
    });

    document.getElementById("closeModalBtn").addEventListener("click", () => {
        document.getElementById("userModal").style.display = "none";
    })
    
}