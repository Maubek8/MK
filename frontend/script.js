// Função para trocar o conteúdo central
function showCategory(category) {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";

    switch (category) {
        case 'esportes':
            mainContent.innerHTML = `
                <h2>Escolha o Esporte</h2>
                <form>
                    <div class="form-group">
                        <label>Esporte</label>
                        <select id="esporte">
                            <option value="luta">Luta</option>
                            <option value="corrida">Corrida</option>
                            <option value="ciclismo">Ciclismo</option>
                        </select>
                    </div>
                    <button class="save-btn" onclick="salvarPaciente()">Selecionar</button>
                </form>
            `;
            break;

        case 'areas':
            mainContent.innerHTML = `
                <h2>Escolha a Área de Análise</h2>
                <div class="form-group">
                    <label><input type="checkbox" name="areas" value="MMSS"> Membros Superiores</label>
                    <label><input type="checkbox" name="areas" value="MMII"> Membros Inferiores</label>
                    <label><input type="checkbox" name="areas" value="Core"> Core</label>
                    <label><input type="checkbox" name="areas" value="Postural"> Análise Postural</label>
                    <label><input type="checkbox" name="areas" value="Mobilidade"> Mobilidade</label>
                </div>
                <button class="save-btn" onclick="salvarPaciente()">Confirmar</button>
            `;
            break;

        case 'avaliacoes':
            mainContent.innerHTML = `
                <h2>Escolha o Tipo de Avaliação</h2>
                <div class="form-group">
                    <label><input type="checkbox" name="avaliacoes" value="flexibilidade"> Flexibilidade</label>
                    <label><input type="checkbox" name="avaliacoes" value="equilibrio"> Equilíbrio</label>
                    <label><input type="checkbox" name="avaliacoes" value="forca"> Força</label>
                    <label><input type="checkbox" name="avaliacoes" value="agilidade"> Agilidade</label>
                </div>
                <button class="save-btn" onclick="salvarPaciente()">Confirmar</button>
            `;
            break;
    }
}

// Função para salvar paciente (exemplo de AJAX)
function salvarPaciente() {
    const nome = document.querySelector('#nome').value;
    const idade = document.querySelector('#idade').value;
    const esporte = document.querySelector('#esporte')?.value;
    const areas = Array.from(document.querySelectorAll('input[name="areas"]:checked')).map(el => el.value);
    const avaliacoes = Array.from(document.querySelectorAll('input[name="avaliacoes"]:checked')).map(el => el.value);

    const data = {
        nome: nome,
        idade: idade,
        esporte: esporte,
        areas: areas,
        avaliacoes: avaliacoes,
    };

    fetch('https://seu-backend-servidor.com/salvar_paciente.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert("Dados salvos com sucesso!");
    })
    .catch(error => console.error('Erro:', error));
}
