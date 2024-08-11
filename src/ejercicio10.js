let cantidadCopias = 54
let suma1 = cantidadCopias*120
let suma2= cantidadCopias*100
let suma3= cantidadCopias*80
let suma4= cantidadCopias*50
if (cantidadCopias<=499){
    console.log(`Cada copia le saldra por $120 y su total a pagar es= ${suma1}`)
}else if (cantidadCopias>=500 && cantidadCopias<=749){
    console.log(`Cada copia le saldra por $100 y su total a pagar es= ${suma2}`)
}else if (cantidadCopias>=750 && cantidadCopias <=999){
    console.log(`Cada copia le saldra por $80 y su total a pagar es= ${suma3}`)
}else if (cantidadCopias>=1000){
    console.log(`Cada copia le saldra por $50 y su total a pagar es= ${suma4}`)
}