document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.display = 'none';
            });
            dropdownContent.style.display = 'block';
        }
    });
});

function generateResults() {
    const resultDisplay = document.getElementById('result-display');
    const tests = [
        { id: 'membros', label: 'Comprimento dos Membros Inferiores' },
        { id: 'panturrilha', label: 'Circunferência da Panturrilha' },
        { id: 'quadriceps', label: 'Circunferência do Quadríceps' },
        { id: 'tenil', label: 'Comprimento do Tênsil do Quadril (Teste de Thomas)' },
        { id: 'dedos', label: 'Distância dos Dedos ao Solo' },
        { id: 'fascia', label: 'Circunferência da Fáscia Plantar' },
        { id: 'marcha', label: 'Análise de Marcha e Corrida em Esteira' },
        { id: 'baropodometria', label: 'Baropodometria Estática e Dinâmica' },
        { id: 'dorsiflexao', label: 'Dorsiflexão do Tornozelo' },
        { id: 'controle-motor', label: 'Teste de Controle Motor e Estabilidade do Core' },
        { id: 'isometrica', label: 'Dinâmica de Força Isométrica (Rotadores de Quadril)' },
        { id: 'footcore', label: 'Footcore' },
        { id: 'fascia-plantar', label: 'Flexibilidade da Fáscia Plantar' },
        { id: 'tendao', label: 'Flexibilidade do Tendão Calcâneo (Aquiles)' }
    ];

    let results = '';
    tests.forEach(test => {
        const value = document.getElementById(test.id).value;
        results += `<strong>${test.label}:</strong> ${value ? value : 'Não informado'}<br>`;
    });

    document.getElementById('results').innerHTML = results;
    resultDisplay.style.display = 'block';
}

function downloadPDF() {
    const results = document.getElementById('results').innerHTML;
    const pdfWindow = window.open('', '_blank');
    pdfWindow.document.write(`
        <html>
        <head><title>Resultados da Avaliação</title></head>
        <body>
            <h1>Resultados da Avaliação Biomecânica - MK-CARDIOSPORT</h1>
            <p>${results}</p>
            <p style="text-align: center;">www.mk-cardiosport.com</p>
            <img src="logo.png" alt="MK-CARDIOSPORT Logo" style="display: block; margin: 20px auto; width: 100px;">
        </body>
        </html>
    `);
    pdfWindow.document.close();
    pdfWindow.print();
}
