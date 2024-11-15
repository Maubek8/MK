function showCategory(category) {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";

    switch (category) {
        case 'todasAvaliacoes':
            mostrarTodasAvaliacoes();
            break;
        case 'areasAnalise':
            mostrarAreasAnalise();
            break;
        case 'esportes':
            mostrarEsportes();
            break;
    }
}

function salvarPaciente() {
    const nome = document.querySelector('#nome')?.value;
    const idade = document.querySelector('#idade')?.value;
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
