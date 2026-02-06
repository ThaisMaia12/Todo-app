document.getElementById('Login-form').addEventListener('submit',function (e)
{e.preventDefault();

const username = document.getElementById('username').value.trin();
const password = document.getElementById('password').value.trim();
const errorMessage = document.getElementById('login-error');

//Login usando Lista de Usuários cadastrados 
const loginForm = document.getElementById('login-form'); 

Form.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.getElementById('usernome').value;
    const pass = Document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = users.find(u => 
        u.username === user && u.password === pass
    );
    
    if (foundUser) {
        localStorage.setItem('loggedUser', user);
        window.location.href = 'index.html';
    } else {
        alert('Usuário ou senha inválidos!');
    }
    
});

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorMessage = document.getElementById('login-error');

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const validUser = users.find(u => u.username === username && u.password === password);

        if (validUser) {
            localStorage.setItem('loggedInUser', username);
            window.location.href = 'index.html';
        }
        else {
            errorMessage.textContent = 'Usuário ou senha incorretos!';
        }
    });
}
        //Login usando Lista de Usuários
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const user = existingUsers.find(u => u.username === username && u.password === password);

        if (user) {
            // Usuário autenticado com sucesso
            localStorage.setItem('loggedInUser', username);
            window.location.href = 'index.html'; // Redireciona para a lista de tarefas
        } else {
            errorMessage.textContent = 'Usuário ou senha incorretos!';
        }
    });


// Cadastro de novo usuário
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

    const newUsername = Document.getElementById('new-username').value.trim();
    const newPassword = document.getElementById('new-password').value.trim();
    });
    

// Cadastro de novo usuário
   const registerForm = document.getElementById ('register-form'); 
   if ( registerForm ) {
        e.preventDefault();

    const newUsername = document.getElementById('new-username').value.trin();
    const newPassword = document.getElementById('new-password').value.trim();
    const registerError = document.getElementById('register-error');

    // Verifica se já existe um usuário com o mesmo nome
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.find(u => u.username === newUsername);

    if (userExists) { 
        registerError.textContent = 'Esse nome de usuário ja está em uso!';
        return;
    }

//Salva novo usuário
    existingUsers.push({ username: newUsername, password: newPassword });
    localStorage.setItem('users', JSON.stringify(existingUsers));
    alert('Cadastro realizado com sucesso! Faça login.');

    window.location.href = 'login.html';

//Botão entrar fucionar 
const form = document.getElementById("Login-form");

form.addEventListener("submit", function (e){
    e.preventDefault(); 

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value; 

    if (user && pass) {
        localStorage.setItem("user", user); 
        window.location.href = "index.html"; 
    }
}); 





}; 
}
     