class Usuario {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  }

  // Función para validar credenciales
  function validarCredenciales(username, password) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    const usuario = usuarios.find(u => u.username === username && u.password === password);
    if (usuario) {
      alert('Inicio de sesión exitoso');
      return true;
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
      return false;
    }
  }

  // Función para manejar el evento de inicio de sesión
  function iniciarSesion(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (validarCredenciales(username, password)) {
      window.location.assign("calculadora.html");
    }
  }

  // Función para agregar usuarios
  function agregarUsuario(username, password) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(new Usuario(username, password));
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  // Agregar algunos usuarios de ejemplo al localStorage
  agregarUsuario('Alex', '980338');
  agregarUsuario('usuario2', 'contraseña2');
  agregarUsuario('usuario3', 'contraseña3');

  // Agregar un evento de escucha al botón de inicio de sesión
  const form = document.querySelector('form');
  form.addEventListener('submit', iniciarSesion);