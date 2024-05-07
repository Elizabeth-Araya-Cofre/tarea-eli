let num1 = parseFloat(prompt("Ingrese el primer numero"))
let num2 = parseFloat(prompt("Ingrese el segundo numero"))
let num3 = parseFloat(prompt("Ingrese el tercer numero"))

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("ingrese numeros validos")
} else {
    let numerosOrdenados = [num1, num2, num3].sort(function(a, b) {
        return a- b
  
    })
    console.log("Orden de mayor a menor:", numerosOrdenados[2] + ", " + numerosOrdenados[1] + ", " + numerosOrdenados[0]);
    console.log("Orden de menor a mayor:", numerosOrdenados[0] + ", " + numerosOrdenados[1] + ", " + numerosOrdenados[2]);

    if (num1 === num2 && num1 === num3) {
        console.log("Los números son iguales.");
    }
}