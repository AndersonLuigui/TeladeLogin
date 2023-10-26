const people = [
    {name: 'AndersonLuigui', code: 123 },
    {name: 'NeuraBatista', code: 426},
    {name: 'JoaoMiguel', code: 555}
]


document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function(){
        const username = document.getElementById('username').value;
        const password = parseInt(document.getElementById('password').value);
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = '';

        if (username === '' || password === '') {
            const errorMessage = document.getElementById('errorMessage');
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
    })
})

