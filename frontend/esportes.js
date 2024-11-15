export function mostrarEsportes() {
    const mainContent = document.getElementById("main-content");

    mainContent.innerHTML = `
        <h2>Esportes</h2>
        <p>Selecione o esporte para carregar avaliações específicas:</p>
        <div class="sports-list">
            <button class="sport-btn" onclick="carregarAvaliacaoEsporte('futebol')">Futebol</button>
            <button class="sport-btn" onclick="carregarAvaliacaoEsporte('basquete')">Basquete</button>
            <button class="sport-btn" onclick="carregarAvaliacaoEsporte('volei')">Vôlei</button>
            <button class="sport-btn" onclick="carregarAvaliacaoEsporte('luta')">Luta</button>
            <button class="sport-btn" onclick="carregarAvaliacaoEsporte('atletismo')">Atletismo</button>
        </div>
        <div id="avaliacao-esporte" class="avaliacao-esporte">
            <!-- Conteúdo específico do esporte será carregado aqui -->
        </div>
    `;
}

window.carregarAvaliacaoEsporte = function (esporte) {
    const avaliacaoEsporte = document.getElementById("avaliacao-esporte");
    let conteudo = "";

    switch (esporte) {
        case "futebol":
            conteudo = "<p>Avaliações para Futebol...</p>";
            break;
        case "basquete":
            conteudo = "<p>Avaliações para Basquete...</p>";
            break;
        case "volei":
            conteudo = "<p>Avaliações para Vôlei...</p>";
            break;
        case "luta":
            conteudo = "<p>Avaliações para Luta...</p>";
            break;
        case "atletismo":
            conteudo = "<p>Avaliações para Atletismo...</p>";
            break;
        default:
            conteudo = "<p>Selecione um esporte válido.</p>";
            break;
    }

    avaliacaoEsporte.innerHTML = conteudo;
};
