const users = {
  gabriela: {
    name: "Gabriela Landa",
    occupation: "Administración de Empresas",
    image: "../public/assets/user1.jpg",
    quote: "Me ayudó mucho a aprender nuevas habilidades.",
    reasons: [
      "Quería mejorar mis habilidades de gestión de proyectos.",
      "Buscaba asesorías prácticas en temas laborales.",
      "No encontraba tiempo para clases tradicionales."
    ],
    benefits: [
      "Logré liderar mi primer proyecto con éxito.",
      "Ahora uso herramientas de gestión como Trello y Notion.",
      "Me siento más segura en mi entorno profesional."
    ],
    recommended: ["Francisco García", "Carlos Perez"]
  },
  sarah: {
    name: "Sarah Diaz",
    occupation: "Psicóloga Clínica",
    image: "../public/assets/user2.jpg",
    quote: "Me ayudó mucho a superar muchos problemas.",
    reasons: [
      "Quería orientación profesional para actualizarme.",
      "Buscaba apoyo en estrategias de intervención.",
      "Necesitaba tiempo flexible para formarme."
    ],
    benefits: [
      "Encontré asesoras empáticas y actualizadas.",
      "Ahora aplico nuevas técnicas en mi consulta.",
      "Me siento acompañada en mi camino profesional."
    ],
    recommended: ["Maria Lopez"]
  },
  daniel: {
    name: "Daniel Alzamora",
    occupation: "Estudiante de Administración",
    image: "../public/assets/Usuario2.jpeg",
    quote: "Lo recomiendo mucho la verdad, pasé todos mis cursos.",
    reasons: [
      "No entendía bien finanzas ni marketing.",
      "Buscaba apoyo directo y rápido para mis dudas.",
      "Prefería estudiar con alguien que me explique."
    ],
    benefits: [
      "Mejoré mis notas en todos los cursos.",
      "Aprendí con ejemplos reales de empresa.",
      "Ahora me gusta aprender más por mi cuenta."
    ],
    recommended: ["Richard Muller"]
  },
  luiz: {
    name: "Luiz Diaz",
    occupation: "Estudiante de Ingeniería Civil",
    image: "../public/assets/Usuario1.jpeg",
    quote: "Me ayudó a prepararme mejor académicamente.",
    reasons: [
      "Necesitaba apoyo en física y cálculo.",
      "Quería practicar con ejercicios guiados.",
      "Me costaba seguir el ritmo en clase."
    ],
    benefits: [
      "Ahora resuelvo problemas con confianza.",
      "Aprobé física II en el primer intento.",
      "Sigo usando Skill Link para nuevos cursos."
    ],
    recommended: ["Carlos Perez"]
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const user = users[id];

  if (!user) {
    document.body.innerHTML = "<h2 style='text-align:center;margin-top:3rem'>Usuario no encontrado</h2>";
    return;
  }

  // Asignar datos del usuario
  document.querySelector(".profile-image").src = user.image;
  document.querySelector(".profile-info h1").textContent = user.name;
  document.querySelector(".profile-info h2").textContent = user.occupation;
  document.querySelector(".profile-info p").textContent = `“${user.quote}”`;

  document.querySelector(".reasons-list").innerHTML =
    user.reasons.map(r => `<li>${r}</li>`).join("");

  document.querySelector(".benefits-list").innerHTML =
    user.benefits.map(b => `<li>${b}</li>`).join("");

  document.querySelector(".recommended-list").innerHTML =
    user.recommended.map(n => `<li>${n}</li>`).join("");

  // Interacción de like/dislike
  const likeBtn = document.getElementById("like-btn");
  const dislikeBtn = document.getElementById("dislike-btn");
  const feedbackMsg = document.getElementById("feedback-msg");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.add("selected");
    dislikeBtn.classList.remove("selected");
    feedbackMsg.textContent = "¡Gracias! Nos alegra que te haya servido.";
  });

  dislikeBtn.addEventListener("click", () => {
    dislikeBtn.classList.add("selected");
    likeBtn.classList.remove("selected");
    feedbackMsg.textContent = "Gracias por tu opinión. Trabajaremos en mejorar.";
  });
});
