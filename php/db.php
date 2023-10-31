<?php
    $databasePath = './mydatabase.db';

    $db = new SQLite3($databasePath);
    if(!$db) {
        die('Falha na conexão com o banco de dados.');
    }




    $newUsername = $_POST['newUsername'];
    $newPassword = password_hash($_POST['newPassword'], PASSWORD_DEFAULT);
    $stmt->bindValue(':username', $newUsername. SQLITE3_TEXT);
    $stmt->bindValue(':password', $newPassword. SQLITE3_TEXT);

    if ($stmt->execute()) {
        echo 'Usuário registrado com sucesso';
    } else {
        echo 'Error ao cadastrar-se ';
    }



    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $db->prepare('SELECT * FROM users WHERE username = :username');
    $stmt->bindValue(':username', SQLITE3_TEXT);
    $result = $stmt->execute();
    $user = $result->fetchArray(SQLITE3_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        echo 'Usuário autenticado com sucesso';
    } else {
        echo 'Credenciais inválidas';

    }


?>


