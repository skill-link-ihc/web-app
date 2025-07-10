document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('open-login-modal');
    const registerButton = document.getElementById('open-register-modal');

    loginButton.addEventListener('click', () => {
        window.location.href = "src/login.html"; // Correct relative path
    });

    registerButton.addEventListener('click', () => {
        window.location.href = "src/register.html"; // Correct relative path
    });
});

function Login() {
    window.location.href = "src/login.html"; // Correct relative path
}

function Registrar() {
    window.location.href = "src/register.html"; // Correct relative path
}


