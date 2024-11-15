// Função para abrir e fechar o modal de paciente
function togglePatientModal() {
    const modal = document.getElementById("patientModal");
    modal.style.display = (modal.style.display === "flex") ? "none" : "flex";
}

// Função para salvar os dados do paciente
function savePatient(event) {
    event.preventDefault();
    const patientName = document.getElementById("patientName").value;
    const patientAge = document.getElementById("patientAge").value;

    // Exibe o nome do paciente na interface
    document.getElementById("patientNameDisplay").textContent = `Paciente: ${patientName}`;

    // Fecha o modal
    togglePatientModal();

    // Envia para o backend em PHP
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

// Função para exibir categorias dinâmicas na área central
function showCategory(category) {
    const mainContent = document.getElementById("main-content");

    switch (category) {
        case 'todasAvaliacoes':
            mainContent.innerHTML = `<h2>Todas as Avaliações</h2><p>Conteúdo para todas as avaliações...</p>`;
            break;
        case 'areasAnalise':
            mainContent.innerHTML = `<h2>Áreas de Análise</h2><p>Conteúdo para áreas de análise...</p>`;
            break;
        case 'esportes':
            mainContent.innerHTML = `<h2>Esportes</h2><p>Conteúdo para esportes...</p>`;
            break;
        default:
            mainContent.innerHTML = `<h2>Bem-vindo</h2><p>Selecione uma categoria.</p>`;
            break;
    }
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("patientModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
