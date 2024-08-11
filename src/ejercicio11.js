let pitido = true
let giroDisco = true
let giroUnidad = true
if(pitido==true && giroDisco==true){
    console.log("Esta averiada")
} else if (pitido==true && giroUnidad==true){
    console.log("Pongase en contacto con el tecnico apoyo")
} else if (pitido==true && giroUnidad==false){
    console.log("Verificar contactos de la unidad")
} else if (pitido==false && giroDisco==false){
    console.log("Traiga la computadora para repararla en la central")
}else if (pitido==false && giroDisco==true){
    console.log ("Compruebe las conexiones de altavoces")
}