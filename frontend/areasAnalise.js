function mostrarAreasAnalise() {
    const mainContent = document.getElementById("main-content");
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
}
