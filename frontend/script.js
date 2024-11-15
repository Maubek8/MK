import { todasAvaliacoesContent } from "./todasAvaliacoes.js";
import { areasAnaliseContent } from "./areasAnalise.js";
import { esportesContent } from "./esportes.js";

function showCategory(category) {
    console.log(`Carregando categoria: ${category}`);
    const mainContent = document.getElementById("main-content");
    switch (category) {
        case 'todasAvaliacoes':
            mainContent.innerHTML = todasAvaliacoesContent();
            break;
        case 'areasAnalise':
            mainContent.innerHTML = areasAnaliseContent();
            break;
        case 'esportes':
            mainContent.innerHTML = esportesContent();
            break;
        default:
            mainContent.innerHTML = `<h2>Bem-vindo</h2><p>Selecione uma categoria.</p>`;
            break;
    }
}

function togglePatientModal() {
    const modal = document.getElementById("patientModal");
    const isVisible = modal.style.display === "flex";
    modal.style.display = isVisible ? "none" : "flex";
    if (!isVisible) {
        document.getElementById("patientName").focus();
    }
}

function savePatient(event) {
    event.preventDefault();
    const patientName = document.getElementById("patientName").value.trim();
    const patientAge = document.getElementById("patientAge").value;

    if (!patientName || !patientAge) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    document.getElementById("patientNameDisplay").textContent = `Paciente: ${patientName}`;
    togglePatientModal();

    const formData = new FormData();
    formData.append("patientName", patientName);
    formData.append("patientAge", patientAge);

    fetch("salvar_paciente.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => alert("Paciente salvo com sucesso!"))
    .catch(error => {
        console.error("Erro ao salvar paciente:", error);
        alert("Erro ao salvar o paciente. Por favor, tente novamente.");
    });
}

window.onclick = function(event) {
    const modal = document.getElementById("patientModal");
    if (modal && event.target === modal) {
        modal.style.display = "none";
    }
};

window.showCategory = showCategory;
window.togglePatientModal = togglePatientModal;
window.savePatient = savePatient;
