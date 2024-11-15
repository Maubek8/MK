// Importar as categorias
import { mostrarTodasAvaliacoes } from "./todasAvaliacoes.js";
import { mostrarAreasAnalise } from "./areasAnalise.js";
import { mostrarEsportes } from "./esportes.js";

// Função para alternar categorias
function showCategory(category) {
    const mainContent = document.getElementById("main-content");
    switch (category) {
        case "todasAvaliacoes":
            mostrarTodasAvaliacoes();
            break;
        case "areasAnalise":
            mostrarAreasAnalise();
            break;
        case "esportes":
            mostrarEsportes();
            break;
        default:
            mainContent.innerHTML = "<h2>Bem-vindo</h2><p>Selecione uma categoria.</p>";
            break;
    }
}

// Função para abrir/fechar o modal de cadastro de paciente
function togglePatientModal() {
    const modal = document.getElementById("patientModal");
    modal.style.display = modal.style.display === "flex" ? "none" : "flex";

    if (modal.style.display === "flex") {
        const currentDate = new Date().toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
        document.getElementById("patientDate").value = currentDate;
    }
}

// Função para salvar os dados do paciente
function savePatient(event) {
    event.preventDefault();
    const patientName = document.getElementById("patientName").value.trim();
    const patientAge = document.getElementById("patientAge").value;
    const patientDate = document.getElementById("patientDate").value;

    if (!patientName || !patientAge) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    document.getElementById("patientNameDisplay").textContent = `Paciente: ${patientName}`;
    togglePatientModal();

    const formData = new FormData();
    formData.append("patientName", patientName);
    formData.append("patientAge", patientAge);
    formData.append("patientDate", patientDate);

    fetch("salvar_paciente.php", {
        method: "POST",
        body: formData,
    })
        .then(response => response.text())
        .then(data => alert("Paciente salvo com sucesso!"))
        .catch(error => {
            console.error("Erro ao salvar paciente:", error);
            alert("Erro ao salvar o paciente. Por favor, tente novamente.");
        });
}

// Expor funções globalmente
window.showCategory = showCategory;
window.togglePatientModal = togglePatientModal;
window.savePatient = savePatient;
