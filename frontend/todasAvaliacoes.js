// Dados das avaliações em um array separado
const avaliacoes = [
        // Membros Superiores (MMSS)
        { id: "comprimentoBraco", nome: "Comprimento do Braço", descricao: "(Fita Métrica)", instrumento: "fitaMetrica" },
        { id: "circunferenciaBiceps", nome: "Circunferência do Bíceps", descricao: "(Fita Métrica)", instrumento: "fitaMetrica" },
        { id: "circunferenciaAntebraco", nome: "Circunferência do Antebraço", descricao: "(Fita Métrica)", instrumento: "fitaMetrica" },
        { id: "flexaoOmbro", nome: "Flexão de Ombro", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "extensaoOmbro", nome: "Extensão de Ombro", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "abducaoOmbro", nome: "Abdução de Ombro", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "aducaoOmbro", nome: "Adução de Ombro", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "rotacaoInternaOmbro", nome: "Rotação Interna de Ombro", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "rotacaoExternaOmbro", nome: "Rotação Externa de Ombro", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "flexaoCotovelo", nome: "Flexão de Cotovelo", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "extensaoCotovelo", nome: "Extensão de Cotovelo", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "pronosupinacaoAntebraco", nome: "Pronação e Supinação do Antebraço", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "flexaoPunho", nome: "Flexão de Punho", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "extensaoPunho", nome: "Extensão de Punho", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "desvioRadialUlnar", nome: "Desvio Ulnar e Radial do Punho", descricao: "(Goniômetro)", instrumento: "goniometro" },

        // Membros Inferiores (MMII)
        { id: "comprimentoCoxa", nome: "Comprimento da Coxa", descricao: "(Fita Métrica)", instrumento: "fitaMetrica" },
        { id: "comprimentoPerna", nome: "Comprimento da Perna", descricao: "(Fita Métrica)", instrumento: "fitaMetrica" },
        { id: "circunferenciaCoxa", nome: "Circunferência da Coxa", descricao: "(Fita Métrica)", instrumento: "fitaMetrica" },
        { id: "circunferenciaJoelho", nome: "Circunferência do Joelho", descricao: "(Fita Métrica)", instrumento: "fitaMetrica" },
        { id: "circunferenciaPanturrilha", nome: "Circunferência da Panturrilha", descricao: "(Fita Métrica)", instrumento: "fitaMetrica" },
        { id: "circunferenciaTornozelo", nome: "Circunferência do Tornozelo", descricao: "(Fita Métrica)", instrumento: "fitaMetrica" },
        { id: "flexaoQuadril", nome: "Flexão de Quadril", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "extensaoQuadril", nome: "Extensão de Quadril", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "abducaoQuadril", nome: "Abdução de Quadril", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "aducaoQuadril", nome: "Adução de Quadril", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "rotacaoInternaQuadril", nome: "Rotação Interna de Quadril", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "rotacaoExternaQuadril", nome: "Rotação Externa de Quadril", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "flexaoJoelho", nome: "Flexão de Joelho", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "extensaoJoelho", nome: "Extensão de Joelho", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "dorsiflexaoTornozelo", nome: "Dorsiflexão de Tornozelo", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "flexaoPlantarTornozelo", nome: "Flexão Plantar de Tornozelo", descricao: "(Goniômetro)", instrumento: "goniometro" },

        // Tronco e Core
        { id: "circunferenciaAbdomen", nome: "Circunferência do Abdômen", descricao: "(Fita Métrica)", instrumento: "fitaMetrica" },
        { id: "circunferenciaTorax", nome: "Circunferência do Tórax", descricao: "(Fita Métrica)", instrumento: "fitaMetrica" },
        { id: "comprimentoTronco", nome: "Comprimento do Tronco", descricao: "(Fita Métrica)", instrumento: "fitaMetrica" },
        { id: "flexaoColunaCervical", nome: "Flexão da Coluna Cervical", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "extensaoColunaCervical", nome: "Extensão da Coluna Cervical", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "flexaoLateralColunaLombar", nome: "Inclinação Lateral da Coluna Lombar", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "rotacaoToracica", nome: "Rotação Torácica", descricao: "(Goniômetro)", instrumento: "goniometro" },
        { id: "inclinacaoPelvica", nome: "Ângulo de Inclinação Pélvica", descricao: "(Goniômetro)", instrumento: "goniometro" },

// Função para gerar a lista de avaliações com filtros
function gerarListaAvaliacoes() {
    return avaliacoes
        .map(
            avaliacao => `
        <div class="form-group avaliacao-item" data-instrumento="${avaliacao.instrumento}">
            <label>
                <input type="checkbox" name="avaliacoes" value="${avaliacao.id}">
                ${avaliacao.nome} <span class="descricao">${avaliacao.descricao}</span>
            </label>
        </div>
    `
        )
        .join("");
}

// Função principal para exibir todas as avaliações
export function mostrarTodasAvaliacoes() {
    const mainContent = document.getElementById("main-content");

    mainContent.innerHTML = `
        <h2>Todas as Avaliações</h2>
        
        <div class="filter-options">
            <label><input type="checkbox" id="fitaMetrica" onchange="filtrarAvaliacoes()"> Fita Métrica</label>
            <label><input type="checkbox" id="goniometro" onchange="filtrarAvaliacoes()"> Goniômetro</label>
        </div>

        <div id="avaliacoes-list">
            ${gerarListaAvaliacoes()}
        </div>

        <button class="save-btn" onclick="salvarPaciente()">Salvar Seleção</button>
    `;
}

// Função para filtrar avaliações com base nos instrumentos selecionados
function filtrarAvaliacoes() {
    const fitaMetricaSelecionada = document.getElementById("fitaMetrica").checked;
    const goniometroSelecionado = document.getElementById("goniometro").checked;
    const avaliacoes = document.querySelectorAll(".avaliacao-item");

    avaliacoes.forEach(avaliacao => {
        const instrumento = avaliacao.getAttribute("data-instrumento");

        // Exibe os itens com base no filtro
        if (
            (fitaMetricaSelecionada && instrumento.includes("fitaMetrica")) ||
            (goniometroSelecionado && instrumento.includes("goniometro")) ||
            (!fitaMetricaSelecionada && !goniometroSelecionado)
        ) {
            avaliacao.style.display = "block";
        } else {
            avaliacao.style.display = "none";
        }
    });
}

