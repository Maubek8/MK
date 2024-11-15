function salvarPaciente() {
    const formData = new FormData(document.getElementById('formPaciente'));
    
    fetch('https://seu-backend-servidor.com/salvar_paciente.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        const resultDisplay = document.getElementById('result-display');
        const results = document.getElementById('results');
        results.textContent = data;
        resultDisplay.style.display = 'block';
    })
    .catch(error => console.error('Erro:', error));
}

function downloadPDF() {
    const resultText = document.getElementById('results').textContent;
    const doc = new jsPDF();
    
    doc.text('Resultados da Avaliação - MK-CARDIOSPORT', 10, 10);
    doc.text(resultText, 10, 20);
    doc.save('avaliacao_paciente.pdf');
}
