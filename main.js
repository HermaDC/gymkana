// Función para cargar usuarios desde JSON simulado
function loadUsers() {
    return JSON.parse(localStorage.getItem('users')) || {};
}

// Función para guardar usuarios en JSON simulado
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Manejo del registro
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('new-username').value;
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;

    let users = loadUsers();

    if (users[username]) {
        showMessage('El nombre de usuario ya existe. Por favor, elige otro.');
    } else {
        users[username] = { email: email, password: password, score: 0 };
        saveUsers(users);
        showMessage('Registro exitoso. Ahora puedes iniciar sesión.', 'green');
        toggleForms(); // Cambiar a formulario de login
    }
});

// Manejo del login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let users = loadUsers();

    if (users[username] && users[username].password === password) {
        showMessage('Inicio de sesión exitoso.', 'green');
        // Aquí puedes redirigir a la página de la gymkana o mostrar contenido exclusivo
        window.location.href = 'pruebas.html';
    } else {
        showMessage('Nombre de usuario o contraseña incorrectos.');
    }
});

// Cambiar entre formularios de registro y login
document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    toggleForms();
});

document.getElementById('show-register').addEventListener('click', function(e) {
    e.preventDefault();
    toggleForms();
});

function toggleForms() {
    const registerForm = document.getElementById('register-container');
    const loginForm = document.getElementById('login-container');
    if (registerForm.style.display === 'none') {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}

// Mostrar mensajes al usuario
function showMessage(message, color = 'red') {
    const messageBox = document.getElementById('message');
    messageBox.textContent = message;
    messageBox.style.color = color;
}
