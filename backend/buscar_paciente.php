<?php
include 'db_config.php';

$nome = $_GET['nome'];
$sql = "SELECT * FROM pacientes WHERE nome = '$nome'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $paciente = $result->fetch_assoc();
    header('Content-Type: application/json');
    echo json_encode($paciente);
} else {
    echo json_encode(['error' => 'Paciente não encontrado']);
