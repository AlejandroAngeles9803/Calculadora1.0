// Creamos una clase para la calculadora
class Calculadora {
    constructor() {
      // Creamos un array para almacenar los números ingresados
      this.numeros = [];
      // Creamos una variable para almacenar el operador actual
      this.operador = "";
      // Obtenemos la pantalla de la calculadora
      this.pantalla = document.getElementById("pantalla");
      // Obtenemos todos los botones de la calculadora
      this.botones = document.querySelectorAll("button");
     
      // Agregamos un listener para cada botón
      this.botones.forEach((boton) => {
        boton.addEventListener("click", (event) => {
          // Obtenemos el valor del botón
          const valor = event.target.getAttribute("data-valor");
          // Si el valor es un número o un punto decimal
          if (!isNaN(valor) || valor === ".") {
            // Agregamos el valor al último número ingresado
            if (
              this.numeros.length === 0 ||
              isNaN(this.numeros[this.numeros.length - 1])
            ) {
              this.numeros.push(valor);
            } else {
              this.numeros[this.numeros.length - 1] += valor;
            }
            // Actualizamos la pantalla con el número actual
            this.actualizarPantalla(this.numeros[this.numeros.length - 1]);
          }
          // Si el valor es un operador
          else if (valor === "+" || valor === "-" || valor === "*" || valor === "/") {
            // Si ya hay un operador, resolvemos la operación anterior
            if (this.operador !== "") {
              this.resolverOperacion();
            }
            // Guardamos el operador actual
            this.operador = valor;
            // Agregamos un nuevo número al array
            this.numeros.push("");
          }
          // Si el valor es "C", reiniciamos la calculadora
          else if (valor === "C") {
            this.reiniciar();
          }
          // Si el valor es "=", resolvemos la operación actual
          else if (valor === "=") {
            this.resolverOperacion();
          }

         
         
        
        });
      });
    }
  
    // Método para actualizar la pantalla con el valor actual
    actualizarPantalla(valor) {
      this.pantalla.value = valor;
    }
  
    // Método para resolver la operación actual
    resolverOperacion() {
      // Convertimos los números a float
      const num1 = parseFloat(this.numeros[0]);
      const num2 = parseFloat(this.numeros[1]);
      // Realizamos la operación según el operador actual
      let resultado = 0;
      switch (this.operador) {
        case "+":
          resultado = num1 + num2;
          break;
        case "-":
          resultado = num1 - num2;
          break;
        case "*":
          resultado = num1 * num2;
          break;
        case "/":
          resultado = num1 / num2;
          break;
        default:
          resultado = 0;
      }
      // Actualizamos la pantalla con el resultado
      this.actualizarPantalla(resultado);
      // Agregamos el resultado al array de números
      this.numeros = [resultado.toString()];
      // Reiniciamos el operador
      this.operador = "";

       
    }
  
    // Método para reiniciar la calculadora
    reiniciar() {
        this.numeros = [];
        this.operador = "";
        this.actualizarPantalla("0");
    }


   
}

// Creamos una instancia de la calculadora
const calculadora = new Calculadora();

  