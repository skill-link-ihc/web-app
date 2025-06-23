Feature: US27 - Contactar con soporte técnico
  Como usuario,
  deseo contactar con soporte técnico
  para resolver dudas o problemas con la plataforma.

  Scenario: E1 - Enviar mensaje desde la sección de soporte
    Dado que el usuario accede a la página de soporte
    Cuando llena y envía el formulario de contacto
    Entonces se envía el mensaje al equipo de soporte
