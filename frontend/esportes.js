function mostrarEsportes() {
    const mainContent = document.getElementById("main-content");
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
}
