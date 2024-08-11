let tamañoLavadora = 1
let cantidadLavadoras = 2
if(tamañoLavadora == 1){
    tamañoLavadora = "lavadora grande"
    valor1 = 4000
}else{
    tamañoLavadora = "lavadoras pequeñas "
    valor1 = 3000
}if (cantidadLavadoras > 3){
    let costo = cantidadLavadoras*valor1
    let descuento = costo * 0.03
    let costoDescuento = costo - descuento
    console.log (`Usted alquilo ${cantidadLavadoras} ${tamañoLavadora} y su costo es ${costoDescuento}`)

} else if(cantidadLavadoras <=3){
    let costo = cantidadLavadoras*valor1
    console.log (`Usted alquilo ${cantidadLavadoras} ${tamañoLavadora} y su costo es ${costo}`)
}