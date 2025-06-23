Feature: US05 - Visualización de disponibilidad horaria
  Como usuario,
  quiero visualizar la disponibilidad del asesor
  para agendar sesiones en horarios que me convengan.

  Scenario: E1 - Ver calendario de disponibilidad
    Dado que el usuario accede al perfil del asesor
    Cuando se carga la sección de disponibilidad
    Entonces se muestra un calendario con bloques de tiempo disponibles

  Scenario: E2 - Navegar por el calendario
    Dado que el calendario está visible
    Cuando el usuario cambia de semana o mes
    Entonces se actualiza la vista con los nuevos horarios
