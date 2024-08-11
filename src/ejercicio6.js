let numero1 = prompt("ingrese su numero")
let numero2 = prompt("ingrese su numero")
let numero3 = prompt("ingrese su numero")
if (numero1>numero2 && numero1>numero3){
    alert("El primer numero es el mayor")
}else if (numero2>numero1 && numero2>numero3){
    alert("EL segundo numero es el mayor")
}else if (numero3>numero1 && numero3>numero2){
    alert("El tercer numero es el mayor")
}else {
    alert("Todos los numeros son iguales")
} 