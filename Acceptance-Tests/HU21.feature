Feature: US21 - Iniciar sesión en la plataforma
  Como usuario,
  quiero iniciar sesión
  para acceder a mi perfil y funcionalidades personalizadas.

  Scenario: E1 - Inicio de sesión con credenciales válidas
    Dado que el usuario está en la pantalla de login
    Cuando ingresa su correo y contraseña correctos
    Entonces accede al sistema y es redirigido a su panel

  Scenario: E2 - Error por credenciales inválidas
    Dado que el usuario ingresa datos incorrectos
    Entonces se muestra un mensaje de error indicando el problema
