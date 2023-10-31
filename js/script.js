/* // OBJETOS ----- ARRAY DE OBJETOS ----------
const people = [
    {name: 'AndersonLuigui', code: 123 },
    {name: 'NeuraBatista', code: 426},
    {name: 'JoaoMiguel', code: 555}
]

// ASSIM QUE A PÁGINA É CARREGADA 'DOMContentLoaded' É EXECUTADA A FUNÇÃO ONDE ACONTECE AS SEGUINTES AÇÕES;
// ESCUTA É ADICIONADA NO BOTÃO
// É OBTIDO O VALOR DO USERNAME E PASSWORD
// É SELECIONADO UMA DIV NO HTML PARA MENSAGEM DE ERRO errorMessage.textContent
// CONDIÇÃO FALSE CASO O username E password ESTEJA SEM VALOR
// CONDIÇÃO TRUE ELSE 
// DEPOIS INTERAÇÃO for (const user of people) 
// window.location.href = 'pagina_exclusiva.html' CASO userFound TRUE É INCIALIZADA A PÁGINA EXCLUSIVA
// OUTRA CONDIÇÃO CASO SEJA DIFERENTE DE userFound MENSAGEM DE ERRO APARECE



document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function(){
        const username = document.getElementById('username').value;
        const password = parseInt(document.getElementById('password').value);
        const errorMessage = document.getElementById('errorMessage');

        errorMessage.textContent = '';

        if (username === '' || isNaN(password)) {
            errorMessage.textContent = 'Nome de usuário e senha são obrigatórios';
        } else {
            let userFound = false;

            for (const user of people) {
                if (user.name === username && user.code === password) {
                    alert('Bem vindo, ' + username);
                    window.location.href = '/html/pagina_exclusiva.html';
                    userFound = true;
                    break;
                }
            }

            if (!userFound) {
                errorMessage.textContent = 'Nome de usuário ou senha está incorreto';
            }
        }


        const registerButton = document.getElementById('registerButton');
        registerButton.addEventListener('click', function() {
            window.location.href = '/html/register.html';
        });



    });







    const registerUserButton = document.getElementById('registerUser');
        registerUserButton.addEventListener('click', function() {
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = parseInt(document.getElementById('newPassword').value);
            const errorRegister = document.getElementById('errorRegister');
            const sucessRegister = document.getElementById('sucessRegister');

            errorRegister.textContent = '';
            sucessRegister.textContent = '';

            if (newUsername === '' || isNaN(newPassword)) {
                errorRegister.textContent = 'Nome de usuário e senha são obrigatórios';

            } else {
                const userExists = people.some(user => user.name === newUsername);

                if (userExists) {
                    errorRegister.textContent = 'Usuário já cadastrado';
                } else {
                    people.push({name: newUsername, code: newPassword});
                    sucessRegister.textContent = ('Usuário cadastrado com sucesso');
                }

                document.getElementById('newUsername').value = '';
                document.getElementById('newPassword').value = '';
                document.getElementById('registerUser').style.display = 'none';
                document.getElementById('loginButton').addEventListener('click', function(){
                    window.location.href = '/index.html';
                })


            }

    })


});
 */