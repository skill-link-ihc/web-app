Feature: US03 - Vista previa de asesores
  Como usuario,
  quiero ver una vista previa de cada asesor
  para tomar decisiones más rápidas.

  Scenario: E1 - Vista previa completa
    Dado que el usuario accede a la lista de expertos
    Cuando se carga la página
    Entonces cada asesor debe mostrar nombre, especialización y descripción

  Scenario: E2 - Formato consistente
    Dado que se listan múltiples asesores
    Entonces todos deben tener el mismo formato de presentación
