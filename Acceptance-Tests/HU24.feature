Feature: US24 - Registro de usuario
  Como usuario,
  quiero poder registrarme
  para crear una cuenta y usar la plataforma.

  Scenario: E1 - Registro exitoso
    Dado que el usuario completa el formulario de registro
    Cuando envía sus datos válidos
    Entonces su cuenta se crea y se muestra un mensaje de bienvenida

  Scenario: E2 - Validaciones de campos
    Dado que el usuario deja campos requeridos vacíos
    Entonces se muestran advertencias indicando los errores
