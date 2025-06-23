Feature: US10 - Guardar asesores como favoritos
  Como usuario,
  quiero guardar asesores en una lista de favoritos
  para revisarlos y compararlos más adelante.

  Scenario: E1 - Añadir asesor a favoritos
    Dado que el usuario visualiza un asesor en la lista
    Cuando hace clic en el icono de "favorito"
    Entonces el asesor se guarda en su lista personal

  Scenario: E2 - Ver lista de favoritos
    Dado que el usuario ha guardado asesores
    Cuando accede a la sección de "Favoritos"
    Entonces se muestran todos los asesores guardados
