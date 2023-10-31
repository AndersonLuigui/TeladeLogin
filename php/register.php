<?php
$stmt = $db->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
$stmt->bindValue(':username', $newUsername, SQLITE3_TEXT);
$stmt->bindValue(':password', $newPassword, SQLITE3_TEXT);

$databasePath = './mydatabase.db';

$db = new SQLite3($databasePath);
if (!$db) {
    die('Falha na conexão com o banco de dados.');
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $newUsername = $_POST['newUsername'];
    $newPassword = $_POST['newPassword'];
    $errorRegister = '';
    $successRegister = '';

    if (empty($newUsername) || !is_numeric($newPassword)) {
        $errorRegister = 'Nome de usuário e senha são obrigatórios';
    } else {
        $people = [
            ['name' => 'AndersonLuigui', 'code' => 123],
            ['name' => 'NeuraBatista', 'code' => 426],
            ['name' => 'JoaoMiguel', 'code' => 555]
        ];

        $userExists = false;

        foreach ($people as $user) {
            if ($user['name'] === $newUsername) {
                $userExists = true;
                break;
            }
        }

        if ($userExists) {
            $errorRegister = 'Usuário já cadastrado';
        } else {
            // Adicione o novo usuário ao array (no caso de um array)
            $people[] = ['name' => $newUsername, 'code' => $newPassword];
            $successRegister = 'Usuário cadastrado com sucesso';
        }
    }

    // Retorna mensagens de erro e sucesso como uma resposta JSON (pode ser melhorado para usar JSON)
    echo json_encode(['error' => $errorRegister, 'success' => $successRegister]);
}
?>
