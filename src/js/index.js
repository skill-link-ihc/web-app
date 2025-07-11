document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('open-login-modal');
    const registerButton = document.getElementById('open-register-modal');
    const loginFromRegister = document.getElementById('login-from-register');
    const registerFromLogin = document.getElementById('register-from-login');
    const botonChatBot = document.getElementById('btn-live-chat');
    const Volver = document.getElementById('btn-back');


    const currentPath = window.location.pathname;
    const isRoot = currentPath.endsWith("index.html") || currentPath === "/" || currentPath.includes("/web-app-main/");


    const loginPath = isRoot ? "src/Login.html" : "../src/Login.html";
    const registerPath = isRoot ? "src/register.html" : "../src/register.html";
    const chatBotPath = isRoot ? "src/chat-bot.html" : "../src/chat-bot.html";

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            window.location.href = loginPath;
        });
    }

    if (registerButton) {
        registerButton.addEventListener('click', () => {
            window.location.href = registerPath;
        });
    }

    if (loginFromRegister) {
        loginFromRegister.addEventListener('click', () => {
            window.location.href = loginPath;
        });
    }

    if (registerFromLogin) {
        registerFromLogin.addEventListener('click', () => {
            window.location.href = registerPath;
        });
    }

    if (botonChatBot) {
        botonChatBot.addEventListener('click', () => {
            window.location.href = chatBotPath;
        });
    }

    if (Volver) {
        Volver.addEventListener('click', () => {
            window.history.back();
        });
    }
});
