let calificacionFisica = 4.5
let calificacionQuimica = 4.6
let calificacionBiologia = 8
let calificacionMatematicas = 9.9
let calificacionInformatica = 9
let suma = calificacionFisica+calificacionQuimica+calificacionBiologia+calificacionMatematicas+calificacionInformatica
let division = suma/5
if (division<=5.99){
    console.log(`Su calificacion es ${division} por lo tanto es mala`)
}else if(division=>6 || division<=8){
    console.log(`Su calificacion es ${division} por lo tanto es buena`)
}else if (division>=8){
    console.log(`Su calificacion es ${division} por lo tanto es superbuena`)
}