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

// Função para carregar avaliações específicas com base no esporte selecionado
window.carregarAvaliacaoEsporte = function (esporte) {
    const avaliacaoEsporte = document.getElementById("avaliacao-esporte");
    let conteudo = "";

    switch (esporte) {
        case "futebol":
            conteudo = `
                <h3>Avaliações para Futebol</h3>
                <ul>
                    <li>Resistência Aeróbica</li>
                    <li>Velocidade</li>
                    <li>Força Explosiva</li>
                    <li>Flexibilidade dos Isquiotibiais</li>
                    <li>Agilidade e Controle de Bola</li>
                </ul>
            `;
            break;
        case "basquete":
            conteudo = `
                <h3>Avaliações para Basquete</h3>
                <ul>
                    <li>Salto Vertical</li>
                    <li>Força de Membros Inferiores</li>
                    <li>Coordenação Motora</li>
                    <li>Resistência Anaeróbica</li>
                    <li>Flexibilidade do Quadril</li>
                </ul>
            `;
            break;
        case "volei":
            conteudo = `
                <h3>Avaliações para Vôlei</h3>
                <ul>
                    <li>Força de Preensão Manual</li>
                    <li>Salto de Bloqueio</li>
                    <li>Resistência Anaeróbica</li>
                    <li>Estabilidade de Ombro</li>
                    <li>Mobilidade do Tornozelo</li>
                </ul>
            `;
            break;
        case "luta":
            conteudo = `
                <h3>Avaliações para Luta</h3>
                <ul>
                    <li>Força Explosiva dos Braços</li>
                    <li>Resistência Isométrica</li>
                    <li>Agilidade e Movimentação</li>
                    <li>Flexibilidade de Quadril</li>
                    <li>Capacidade Cardiovascular</li>
                </ul>
            `;
            break;
        case "atletismo":
            conteudo = `
                <h3>Avaliações para Atletismo</h3>
                <ul>
                    <li>Velocidade Máxima</li>
                    <li>Resistência Aeróbica</li>
                    <li>Salto Horizontal</li>
                    <li>Flexibilidade de Tornozelo</li>
                    <li>Estabilidade de Joelho</li>
                </ul>
            `;
            break;
        default:
            conteudo = `
                <h3>Esporte não encontrado</h3>
                <p>Selecione um esporte válido para exibir as avaliações.</p>
            `;
            break;
    }

    avaliacaoEsporte.innerHTML = conteudo;
};
