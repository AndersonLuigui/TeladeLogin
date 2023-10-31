<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $errorMessage = '';

        if (empty($username) || !is_numeric($password)) {
            $errorMessage = 'Nome de usuário e senha são obrigatórios';
        } else {
            $userFound = false;

            $stmt = $db->prepare('SELECT * FROM users WHERE username = :username');
            $stmt->bindValue(':username', $username, SQLITE3_TEXT);
            
            $result = $stmt->execute();

            // Verifique se a consulta retornou algum resultado
            if ($result) {
                $user = $result->fetchArray(SQLITE3_ASSOC);
                if ($user && password_verify($password, $user['password'])) {
                    echo 'Bem vindo, ' . $username;
                    $userFound = true;
                    // Redirecionar para a página exclusiva
                    header('Location: ./html/pagina_exclusiva.html');
                    exit; // Certifique-se de encerrar a execução após o redirecionamento
                }
            }

            if (!$userFound) {
                $errorMessage = 'Nome de usuário ou senha está incorreto';
            }
        }

        // Retornar a mensagem de erro como uma resposta JSON (pode ser melhorado para usar JSON)
        echo $errorMessage;
    }

?>
