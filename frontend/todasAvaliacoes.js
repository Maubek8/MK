function mostrarTodasAvaliacoes() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <h2>Todas as Avaliações</h2>
        <div class="evaluation-category">
            <h3>Flexibilidade</h3>
            <div class="form-group">
                <label><input type="checkbox" name="avaliacoes" value="alongamento_hamstrings"> Alongamento de Isquiotibiais</label>
                <label><input type="checkbox" name="avaliacoes" value="alongamento_ombros"> Alongamento dos Ombros</label>
            </div>
        </div>
        <div class="evaluation-category">
            <h3>Equilíbrio e Controle Neuromuscular</h3>
            <div class="form-group">
                <label><input type="checkbox" name="avaliacoes" value="equilibrio_unilateral"> Equilíbrio Unilateral</label>
                <label><input type="checkbox" name="avaliacoes" value="controle_neuromuscular"> Controle Neuromuscular</label>
            </div>
        </div>
        <div class="evaluation-category">
            <h3>Força e Resistência Muscular</h3>
            <div class="form-group">
                <label><input type="checkbox" name="avaliacoes" value="forca_preensao"> Força de Preensão Manual</label>
                <label><input type="checkbox" name="avaliacoes" value="forca_mmii"> Força de MMII</label>
            </div>
        </div>
        <button class="save-btn" onclick="salvarPaciente()">Salvar Seleção</button>
    `;
}
