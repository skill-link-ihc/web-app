Feature: US26 - Ver información de los creadores
  Como usuario,
  quiero saber más sobre los creadores del sitio
  para entender quién está detrás de la plataforma.

  Scenario: E1 - Acceder a la sección "Sobre nosotros"
    Dado que el usuario navega por el sitio
    Cuando hace clic en "Acerca de"
    Entonces se muestra una sección con información sobre el equipo
