document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const usuarioInput = document.getElementById('usuario').value.trim();
        const contrasenaInput = document.getElementById('contrasena').value;

        let errores = [];

        if (usuarioInput.length < 3) errores.push('El usuario debe tener al menos 3 caracteres');
        if (contrasenaInput.length < 6) errores.push('La contraseña debe tener al menos 6 caracteres');

        if (errores.length > 0) {
            alert(errores.join('\n'));
            return;
        }

        // Obtener usuario guardado en localStorage
        const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioSkillLink'));

        if (
            usuarioGuardado &&
            usuarioInput === usuarioGuardado.usuario &&
            contrasenaInput === usuarioGuardado.contrasena
        ) {
            alert('Inicio de sesión exitoso');
            window.location.href = "../index.html";
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});
