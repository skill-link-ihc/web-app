Feature: US08 - Ordenar resultados de búsqueda
  Como usuario,
  quiero ordenar los asesores por precio, experiencia o calificación
  para encontrar más fácilmente el perfil ideal.

  Scenario: E1 - Ordenar por calificación
    Dado que el usuario está en la página de expertos
    Cuando selecciona "ordenar por calificación"
    Entonces los asesores se listan de mayor a menor calificación

  Scenario: E2 - Ordenar por experiencia
    Dado que el usuario selecciona "ordenar por experiencia"
    Entonces la lista de asesores se actualiza con ese criterio
