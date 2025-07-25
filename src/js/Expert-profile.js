
    const experts = {
      francisco: {
        name: "Francisco García",
        role: "Asesor de Marketing",
        quote: "El mejor asesor de marketing que he tenido.",
        image: "../public/assets/expert1.jpeg",
        achievements: [
          "10 años de experiencia en marketing digital.",
          "Consultor para más de 100 startups.",
          "Especialista en estrategias de marca."
        ],
        pricing: ["30 minutos: S/ 40", "1 hora: S/ 70", "Plan mensual: S/ 250"],
        availability: ["12 de julio - 10:00 a.m.", "13 de julio - 4:00 p.m.", "15 de julio - 9:30 a.m."]
      },
      richard: {
        name: "Richard Muller",
        role: "Economista Ejecutivo",
        quote: "Excelente persona y economista, me inspiró confianza.",
        image: "../public/assets/expert2.jpeg",
        achievements: [
          "Especialista en análisis financiero.",
          "Docente universitario con 12 años de experiencia.",
          "Publicaciones en revistas económicas internacionales."
        ],
        pricing: ["45 minutos: S/ 50", "1 hora: S/ 80", "Pack 3 sesiones: S/ 200"],
        availability: ["14 de julio - 2:00 p.m.", "16 de julio - 10:00 a.m.", "18 de julio - 5:00 p.m."]
      },
      carlos: {
        name: "Carlos Perez",
        role: "Ingeniería en Software",
        quote: "Buen profesional, me ayudó a resolver un problema de Diseño UX.",
        image: "../public/assets/expert3.jpeg",
        achievements: [
          "Experto en diseño UI/UX y desarrollo web.",
          "Experiencia en proyectos ágiles y SCRUM.",
          "Tutor de más de 200 estudiantes."
        ],
        pricing: ["30 minutos: S/ 35", "1 hora: S/ 65", "Mentoría mensual: S/ 220"],
        availability: ["13 de julio - 11:00 a.m.", "14 de julio - 6:00 p.m.", "17 de julio - 9:00 a.m."]
      },
      maria: {
        name: "Maria Lopez",
        role: "Psicóloga Clínica",
        quote: "Me ayudó mucho a superar muchos problemas.",
        image: "../public/assets/expert4.jpeg",
        achievements: [
          "Más de 500 sesiones individuales.",
          "Especialista en ansiedad y depresión.",
          "Atención tanto a estudiantes como a profesionales."
        ],
        pricing: ["Sesión única: S/ 60", "Paquete 3 sesiones: S/ 150", "Sesión grupal: S/ 45"],
        availability: ["15 de julio - 4:00 p.m.", "16 de julio - 11:00 a.m.", "19 de julio - 3:30 p.m."]
      }
    };

    window.addEventListener("DOMContentLoaded", () => {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id");
      const expert = experts[id];

      if (!expert) {
        document.body.innerHTML = "<h2 style='text-align:center;margin-top:3rem'>Asesor no encontrado</h2>";
        return;
      }

      document.querySelector(".profile-image").src = expert.image;
      document.querySelector(".profile-info h1").textContent = expert.name;
      document.querySelector(".profile-info h2").textContent = expert.role;
      document.querySelector(".profile-info p").textContent = `“${expert.quote}”`;

      document.querySelector(".achievements-list").innerHTML =
        expert.achievements.map(a => `<li>${a}</li>`).join("");

      document.querySelector(".pricing-list").innerHTML =
        expert.pricing.map(p => `<li>${p}</li>`).join("");

      document.querySelector(".availability-list").innerHTML =
        expert.availability.map(d => `<li>${d}</li>`).join("");
    });
