document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-register');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const usuario = document.getElementById('usuario').value.trim();
        const correo = document.getElementById('Correo').value.trim();
        const contrasena = document.getElementById('contrasena').value;
        const confirmar = document.getElementById('ConfirmarContraseña').value;

        let errores = [];

        if (usuario.length < 3) errores.push('El usuario debe tener al menos 3 caracteres');
        if (!/^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(correo)) errores.push('Correo electrónico inválido');
        if (contrasena.length < 6) errores.push('La contraseña debe tener al menos 6 caracteres');
        if (contrasena !== confirmar) errores.push('Las contraseñas no coinciden');

        if (errores.length > 0) {
            alert(errores.join('\n'));
            return;
        }

        
        const usuarioObj = { usuario, correo, contrasena };
        localStorage.setItem('usuarioSkillLink', JSON.stringify(usuarioObj));

        alert('¡Registro exitoso!');
        form.reset();
        window.location.href = "../index.html";
    });
});