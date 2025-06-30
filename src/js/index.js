document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('open-login-modal');
    const registerButton = document.getElementById('open-register-modal');

    loginButton.addEventListener('click', () => {
        window.location.href = "../src/login.html"; // Ensure correct case
    });

    registerButton.addEventListener('click', () => {
        window.location.href = "../src/register.html"; // Ensure correct case
    });
});

function Login() {
    window.location.href = "../src/login.html"; // Ensure correct case
}

function Registrar() {
    window.location.href = "../src/register.html"; // Ensure correct case
}


