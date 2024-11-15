<?php
include 'db_config.php';

$nome = $_POST['nome'];
$idade = $_POST['idade'];
$email = $_POST['email'];
$mmss_data = $_POST['mmss_data'];
$mmii_data = $_POST['mmii_data'];
$core_data = $_POST['core_data'];

$sql = "INSERT INTO pacientes (nome, idade, email, mmss_data, mmii_data, core_data) VALUES ('$nome', '$idade', '$email', '$mmss_data', '$mmii_data', '$core_data')";

if ($conn->query($sql) === TRUE) {
    echo "Dados salvos com sucesso!";
} else {
    echo "Erro: " . $conn->error;
}

$conn->close();
?>
