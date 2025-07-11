document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('open-login-modal');
    const registerButton = document.getElementById('open-register-modal');
    const loginFromRegister = document.getElementById('login-from-register');
    const registerFromLogin = document.getElementById('register-from-login');
    const botonChatBot = document.getElementById('btn-live-chat')
    const Volver = document.getElementById('btn-back');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            window.location.href = "../src/Login.html";
        });
    }

    if (registerButton) {
        registerButton.addEventListener('click', () => {
            window.location.href = "../src/register.html";
        });
    }

    if (loginFromRegister) {
        loginFromRegister.addEventListener('click', () => {
            window.location.href = "../src/Login.html";
        });
    }

    if (registerFromLogin) {
        registerFromLogin.addEventListener('click', () => {
            window.location.href = "../src/register.html";
        });
    }

    if(botonChatBot){
        botonChatBot.addEventListener('click',()=> {
            window.location.href = "../src/chat-bot.html";
        });
    }

    if (Volver) {
        Volver.addEventListener('click', () => {
            window.history.back();
        });
    }
});





