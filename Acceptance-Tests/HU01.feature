Feature: US01 - Búsqueda de asesores
  Como usuario,
  quiero ingresar palabras clave en un buscador
  para obtener una lista de asesores relacionados.

  Scenario: E1 - Búsqueda exitosa
    Dado que el usuario accede a la página de expertos
    Cuando escribe una palabra clave válida
    Entonces se muestran asesores relacionados con esa palabra clave

  Scenario: E2 - Búsqueda sin resultados
    Dado que el usuario ha ingresado un término poco común
    Cuando no hay asesores que coincidan
    Entonces se muestra un mensaje indicando que no hay resultados
