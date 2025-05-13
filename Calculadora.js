// Calculadora de Operaciones Basicas
console.log("Bienvenidos a Calculadora Básica");
console.log("¿Que operacion desea realizar?");


function realizarOperacion(num1, num2, operacion) {
    if (operacion == "suma") {
        return num1 + num2;
    } else if (operacion == "resta") {
        return num1 - num2;
    }else if (operacion == "multiplicacion") {
        return num1 * num2;
    } else if (operacion == "division") {
        if (num2 != 0) {
            return num1 / num2;
        } else {
            return "Indefinido, no es posible dividir por cero.";
        }
        
    }

}
let operacion = "suma";

while (operacion != "salir"){
    let operacion = prompt("Escribe la operacion " + "'suma', " + "'resta', " + "'multiplicacion', " + "'division'");
    if (operacion != "suma" && operacion != "resta" && operacion != "multiplicacion" && operacion != "division" && operacion != "salir" ) {
        console.log("¡Error!, Ingresa una operación valida");
    } else if (operacion == "salir") {
        console.log("Gracias por usar calculadora basica, hasta pronto");
        break;
    } else {
        console.log("La operacion seleccionada es: " + operacion);
        let num1 = Number(prompt("Ingresa el primer número:"));
        console.log("Primer número ingresado es: " + num1);
        let num2 = Number(prompt("Ingresa el segundo número:"));
        console.log("Segundo número ingresado es: " + num2);
        console.log("El resultado de la " + operacion + " es: " + realizarOperacion(num1, num2, operacion)); 
        console.log("Si desea continuar con otra operacion escribela, de lo contrario escribe 'salir' para finalizar la calculadora");
    }   
}
