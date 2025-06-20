document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('open-login-modal');
    const registerButton = document.getElementById('open-register-modal');

    loginButton.addEventListener('click', () => {
        window.location.href = "/src/Login.html"
    })

    registerButton.addEventListener('click', () => {
        window.location.href =  "/src/Registrer.html"
    })
});

function Login(){
    window.location.href = "/src/Login.html"
}

function Registrar(){
    window.location.href = "/src/Registrer.html"
}


