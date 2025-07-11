const input = document.getElementById('inputMensaje');
const boton = document.getElementById('botonEnviar');
const cuerpo = document.getElementById('cuerpoChat');

const asesorias = {
    "Marketing Digital": {
        descripcion: "Asesoría en Marketing Digital: Resuelve tus dudas de álgebra, cálculo, geometría y más.",
        calificacion: '4,9/5',
    },
    "Desarrollo de Startups": {
        descripcion: "Asesoría en Desarrollo de Startups: Aprende a crear y gestionar tu propia startup.",
        calificacion: '4,8/5'
    },
    "Analisis de Datos": {
        descripcion: "Asesoría en Análisis de Datos: Mejora tus habilidades en estadística, análisis y visualización de datos.",
        calificacion: '4,85/5'
    },
    "Finanzas Empresariales": {
        descripcion: "Asesoría en Finanzas Empresariales: Aprende a gestionar las finanzas de tu empresa de manera efectiva.",
        calificacion: '4,9/5'
    },
    "Gestion de Proyectos": {
        descripcion: "Asesoría en Gestión de Proyectos: Mejora tus habilidades en planificación, ejecución y control de proyectos.",
        calificacion: '4,7/5'
    },

    "Machine Learning e Inteligencia Artificial": {
        descripcion: "Asesoría en Machine Learning e Inteligencia Artificial: Aprende a aplicar técnicas de machine learning e IA en tus proyectos.",
        calificacion: '4,95/5',
    },

    "Diseño UX/UI": {
        descripcion: "Asesoría en Diseño UX/UI: Mejora la experiencia de usuario y la interfaz de tus aplicaciones y sitios web.",
        calificacion: '4,8/5'
    },

    "Redacción Academica y Tesis":{
        descripcion: "Asesoría en Redacción Académica y Tesis: Mejora tus habilidades de redacción y aprende a estructurar tu tesis de manera efectiva.",
        calificacion: '4,9/5'
    },
};

const asesores = {
    "Francisco García":{
        imagen: "../public/assets/expert1.jpeg",
        descripcion: "Asesor en Marketing Digital con 5 años de experiencia. Especializado en estrategias de redes sociales y SEO.",
        especialidades: ["Redes Sociales", "SEO", "Publicidad Online"],
        experiencia: "Avanzado",
        disponibilidad: "Lunes a Viernes de 9:00 a 18:00",
        precio:"s/ 541 toda la asesoria ",
        calificacion: '4,9/5',
    },

    "Richard Muller":{
        imagen: "../public/assets/expert2.jpeg",
        descripcion: "Economista con 5 años de experiencia. Especializado en análisis de mercado y finanzas personales.",
        especialidades: ["Análisis de Mercado", "Finanzas Personales", "Inversiones"],
        experiencia: "Intermedio",
        disponibilidad: "Lunes a Viernes de 10:00 a 17:00",
        precio:"s/ 250 toda la asesoria ",
        calificacion: '4,7/5',
    },

    "Maria Lopez":{
        imagen: "../public/assets/expert4.jpeg",
        descripcion: "Psicologa clinica con 10 años de experiencia. Especializada en terapia cognitivo-conductual y manejo del estrés.",
        especialidades: ["Terapia Cognitivo-Conductual", "Manejo del Estrés", "Orientación Vocacional"],
        experiencia: "Avanzado",
        disponibilidad: "Lunes a Viernes de 10:00 a 19:00",
        precio:"s/ 365 toda la asesoria ",
        calificacion: '4,8/5',
    },

    "Carlos Pérez":{
        imagen: "../public/assets/expert3.jpeg",
        descripcion: "Ingeniero de Software con 7 años de experiencia. Especializado en desarrollo web y aplicaciones móviles.",
        especialidades: ["Desarrollo Web", "Aplicaciones Móviles", "Bases de Datos"],
        experiencia: "Avanzado",
        disponibilidad: "Lunes a Sábado de 9:00 a 20:00",
        precio:"s/ 400 toda la asesoria ",
        calificacion: '4,6/5',
    },

    "Ana Torres":{
        imagen: "../public/assets/expert5.jpeg",
        descripcion: "Consultora financiera con 8 años de experiencia. Especializada en planificación financiera y gestión de inversiones.",
        especialidades: ["Planificación Financiera", "Gestión de Inversiones", "Ahorro"],
        experiencia: "Avanzado",
        disponibilidad: "Lunes a Viernes de 9:00 a 18:00",
        precio:"s/ 300 toda la asesoria ",
        calificacion: '4,85/5',
    },

    "Laura Fernández":{
        imagen: "../public/assets/expert6.jpg",
        descripcion: "Especialista en Recursos Humanos con 6 años de experiencia. Especializada en reclutamiento y desarrollo organizacional.",
        especialidades: ["Reclutamiento", "Desarrollo Organizacional", "Capacitación"],
        experiencia: "Intermedio",
        disponibilidad: "Lunes a Viernes de 9:00 a 17:00",
        precio:"s/ 280 toda la asesoria ",
        calificacion: '4,9/5',
    }


};

input.addEventListener('input', () => {
    const activo = input.value.trim() !== '';
    boton.disabled = !activo;
    boton.style.opacity = activo ? '1' : '0.5';
    boton.style.cursor = activo ? 'pointer' : 'not-allowed';
});

boton.addEventListener('click', enviarMensaje)
input.addEventListener('keydown', e => {
    if(e.key === 'Enter') enviarMensaje();
});

function enviarMensaje(){
    const texto = input.value.trim();
    if(texto === '') return;

    agregarMensaje('usuario', texto);
    input.value = '';
    input.dispatchEvent(new Event('input'));

    setTimeout(()=> procesarRespuesta(texto), 500);
}

function agregarMensaje(tipo, contenidoHTML){
    const mensaje = document.createElement('div');
    mensaje.className = `mensaje ${tipo}`;
    mensaje.innerHTML = contenidoHTML;
    cuerpo.appendChild(mensaje);
    cuerpo.scrollTop = cuerpo.scrollHeight;
}

function procesarRespuesta(texto){
    const mensaje = texto.toLowerCase();

    if(mensaje.includes('lista')|| mensaje.includes('ofrecen')){ agregarMensaje('bot', "Estas son las asesorias que ofrecemos por el momento: <br>-"+ Object.keys(asesorias).join("<br>-") + "<br> Si quieres saber mas sobre una asesoria, escribe el nombre de la asesoria que te interesa.");
    return;}

    if(mensaje.includes('asesor') || mensaje.includes('asesores') || mensaje.includes('profesionales')){
        agregarMensaje('bot', "Estos son los asesores que tenemos disponibles:<br>" + Object.keys(asesores).map(a => `<strong>${a}</strong>`).join('<br>') + "<br> Si quieres saber mas sobre un asesor, escribe su nombre.");
        return;
    }
        

    const nombreAsesoria = Object.keys(asesorias).find(a => mensaje.includes(a.toLowerCase()));
    if(nombreAsesoria){
        const info = asesorias[nombreAsesoria];
        agregarMensaje('bot',`${info.descripcion}<br>Calificación: ${info.calificacion}`);
        return;
    }

    const nombreAsesor = Object.keys(asesores).find(a => mensaje.includes(a.toLowerCase()));
    if(nombreAsesor){
    const info = asesores[nombreAsesor];
    agregarMensaje(
        'bot',
        `<img src="${info.imagen}" alt="Foto de ${nombreAsesor}" style="width:80px;height:80px;border-radius:50%;margin-bottom:8px;"><br>
        <strong>${nombreAsesor}</strong><br>
        ${info.descripcion}<br>
        Especialidades: ${info.especialidades.join(', ')}<br>
        Experiencia: ${info.experiencia}<br>
        Disponibilidad: ${info.disponibilidad}<br>
        Precio: ${info.precio}<br>
        Calificación: ${info.calificacion}`
    );
    return;
        }


    agregarMensaje('bot', generarRespuestaSimulada(texto));

}


function generarRespuestaSimulada(mensaje){
    if(mensaje.includes('hola') || mensaje.includes ('buenas')){
        return '¡Hola! Estoy aquí para ayudarte en lo que me pidas.';
    } else if(mensaje.includes('reservo') || mensaje.includes('agendo')){
        return 'para reservar una asesoria, primero tienes que elegir una que te llame la atencion, luego escoge los temas que quieras abarcar. Despues elige al asesor de tus preferencias, pudes usar filtros para tener asesores según tus necesidaes economias, experiencia, etc. Luego de eso, entra al perfil del asesor y elige la fecha y hora que mejor te acomode, por ultimo paga la reserva y listo eso seria todo';
    }else if(mensaje.includes('gracias') || mensaje.includes('Grcias')){
        return '¡De nada! Si tienes más preguntas o necesitas ayuda, no dudes en preguntar.';
    }else if(mensaje.includes('adios') || mensaje.includes('chao')){
        return '¡Hasta luego! Espero que tengas un gran día.';
    }else if(mensaje.includes('ayuda') || mensaje.includes('necesito ayuda')){
        return 'Claro, ¿en qué puedo ayudarte? Puedes preguntar sobre nuestras asesorías, asesores disponibles o cualquier otra duda que tengas.';
    }
    else{
        return 'Lo siento, no entendí tu mensaje. ¿Podrías reformularlo o preguntar algo más específico?';
    };
}



