Feature: US07 - Contactar asesores desde el perfil
  Como usuario,
  quiero contactar a un asesor directamente desde su perfil
  para resolver dudas antes de reservar.

  Scenario: E1 - Botón visible
    Dado que el usuario visualiza el perfil de un asesor
    Entonces debe ver un botón de "Enviar mensaje" visible y accesible

  Scenario: E2 - Apertura del formulario de contacto
    Cuando el usuario hace clic en el botón
    Entonces se debe abrir un formulario de contacto o chat
