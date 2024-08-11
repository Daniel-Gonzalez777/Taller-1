let tamañoSandwich = prompt("Ingrese el tamaño deseado")
let ingredientesAdicionales = prompt("Ingrese la adicion deseada")
 valorGrande = 12000
 valorPequeño = 6000
 valorTocinetaPavo = 3000
 valorQueso = 2500
if (tamañoSandwich === "pequeño") {
        if (ingredientesAdicionales=== "jalapeños"){
        alert(`Su total a pagar es = ${valorPequeño}`)
        }else if (ingredientesAdicionales === "tocineta" || ingredientesAdicionales === "pavo") {
            alert (`Su total a pagar es = ${valorPequeño+valorTocinetaPavo}`)
        }else if (ingredientesAdicionales === "queso") {
        alert(`Su total a pagar es= ${valorPequeño+valorQueso}`)
        }else if (ingredientesAdicionales==="ninguno"){
        alert(`Su total a pagar es = ${valorPequeño}`)
        }
}else if (tamañoSandwich === "grande") {
if (ingredientesAdicionales==="jalapeños"){
    alert(`Su total a pagar es = ${valorGrande}`)
}else if (ingredientesAdicionales === "tocineta" || ingredientesAdicionales === "pavo") {
    alert (`Su total a pagar es = ${valorGrande+valorTocinetaPavo}`)
} else if (ingredientesAdicionales === "queso") {
   alert(`Su total a pagar es= ${valorGrande+valorQueso}`)
}else if (ingredientesAdicionales==="ninguno"){
    alert(`Su total a pagar es = ${valorGrande}`)
}
}



