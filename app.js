let lista = []
//
function cambiarEtiqueta(elemento, texto) {
    let elementoHtml = document.getElementById(elemento)
    if (elementoHtml) {
        elementoHtml.innerHTML = texto
    } else {
        console.error(`No se encontró el elemento: ${elemento}`)
    }
} 
//funcion para agregar amigos
function agregarAmigo(){

    cambiarEtiqueta("encabezado","Digite el nombre de sus amigos")

    let amigo = document.querySelector("input").value
//si la lista esta vacia, se elimina la etiqueta ul(esto para que no quede el mensaje de que no hay amigos)
    if (lista.length === 0) {
        cambiarEtiqueta("listaAmigos", "")
    }
//verificar si el amigo ya está en la lista, si no lo esta se ingresa a la lista 
    if (amigo) {
        if (lista.includes(amigo)) {
            alert("Este amigo ya está en la lista.");
            document.querySelector("input").value = "";
            return;
        }
        lista.push(amigo)
        document.querySelector("input").value = ""
            let nuevoElemento = document.createElement("li");
            document.getElementById("listaAmigos").appendChild(nuevoElemento)
            nuevoElemento.innerHTML = amigo
    } else {
        alert("No se ingresó un nombre valido");
    }
} 
//funcionalidad para el boton de sortear amigo secreto
function sortearAmigo(){
//desactivar el boton de agregar amigos cuando se sortea
    document.getElementById("boton1").disabled = true;
    cambiarEtiqueta("encabezado","Ya no se puede agregar más amigos, sortea a todos para volver a jugar")

        //genera un numero aleatorio para seleccionar un amigo de la lista
        let amigo = lista[Math.floor(Math.random() * lista.length)]
        cambiarEtiqueta("resultado", `Tu amigo secreto es: ${amigo}`)
        lista = lista.filter(persona => persona !== amigo)

        //si la lista esta vacia, se muestra un mensaje y se activa el boton de agregar amigos
        if (lista.length === 0) {
            cambiarEtiqueta("listaAmigos", "No hay más amigos que sortear, agregá más amigos para seguir jugando")
            document.getElementById("boton1").disabled = false
        }
}