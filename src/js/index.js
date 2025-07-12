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

    // Hamburger menu functionality
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const loginButtonMobile = document.getElementById('open-login-modal-mobile');
    const registerButtonMobile = document.getElementById('open-register-modal-mobile');

    if (hamburgerMenu && mobileMenu) {
        hamburgerMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Add event listeners for mobile login/register buttons
    if (loginButtonMobile) {
        loginButtonMobile.addEventListener('click', () => {
            window.location.href = loginPath;
        });
    }

    if (registerButtonMobile) {
        registerButtonMobile.addEventListener('click', () => {
            window.location.href = registerPath;
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (hamburgerMenu && mobileMenu) {
            if (!e.target.closest('.header-container')) {
                mobileMenu.classList.remove('active');
            }
        }
    });

    // Close mobile menu when window is resized to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector(".register-form");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const termsAccepted = document.getElementById("terms").checked;

    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un correo válido.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (!termsAccepted) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    const usuarioSkillLink = {
      nombre: name,
      email: email,
      contrasena: password
    };

    localStorage.setItem("usuarioSkillLink", JSON.stringify(usuarioSkillLink));

    alert("¡Registro exitoso!");
    window.location.href = "../index.html";
  });
});


const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('.header-nav');
  const loginRegister = document.querySelector('.header-login-register');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    loginRegister.classList.toggle('active');
  });