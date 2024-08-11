let usuario = "Sergio"
let cantidadHoras = 24
let salarioMinimo = 30000
let salarioMaximo = 33000

if (cantidadHoras <= 10) {
    console.log(`Señor@ ${usuario}, el numero de horas que ha trabajado es = ${cantidadHoras}. Su salario equivale = ${salarioMinimo * cantidadHoras}`);
} else {
    console.log(`Señor@ ${usuario}, el numero de horas que ha trabajado es = ${cantidadHoras}. Su salario equivale = ${salarioMaximo * cantidadHoras}`);
}