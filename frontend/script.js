// Importando as funções de conteúdo de cada categoria
import { todasAvaliacoesContent } from "./todasAvaliacoes.js";
import { areasAnaliseContent } from "./areasAnalise.js";
import { esportesContent } from "./esportes.js";

// Função para exibir categorias dinâmicas na área central
function showCategory(category) {
    const mainContent = document.getElementById("main-content");

    // Limpa o conteúdo anterior e insere o novo conteúdo com base na categoria
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

// Função para abrir e fechar o modal de inserção de dados do paciente
function togglePatientModal() {
    const modal = document.getElementById("patientModal");
    modal.style.display = (modal.style.display === "flex") ? "none" : "flex";
}

// Função para salvar os dados do paciente
function savePatient(event) {
    event.preventDefault();
    const patientName = document.getElementById("patientName").value;
    const patientAge = document.getElementById("patientAge").value;

    // Exibe o nome do paciente ao lado do botão circular
    document.getElementById("patientNameDisplay").textContent = `Paciente: ${patientName}`;

    // Fecha o modal
    togglePatientModal();

    // Envia os dados para o backend (simulação aqui, adaptável a uma URL real)
    const formData = new FormData();
    formData.append("patientName", patientName);
    formData.append("patientAge", patientAge);

    fetch("salvar_paciente.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => alert("Paciente salvo com sucesso!"))
    .catch(error => console.error("Erro ao salvar paciente:", error));
}

// Função para fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("patientModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Expondo as funções para que possam ser acessadas pelos elementos HTML
window.showCategory = showCategory;
window.togglePatientModal = togglePatientModal;
window.savePatient = savePatient;
