Feature: US04 - Acceso al perfil completo del asesor
  Como usuario,
  quiero acceder al perfil completo de un asesor
  para conocer su experiencia, tarifas y especializaciones.

  Scenario: E1 - Acceder desde la lista de expertos
    Dado que el usuario ve la lista de asesores
    Cuando hace clic en "ver más" o en el nombre de un asesor
    Entonces accede al perfil completo de dicho asesor

  Scenario: E2 - Visualización de detalles
    Dado que el usuario está en el perfil del asesor
    Entonces debe ver la experiencia, certificaciones y tarifas por sesión
