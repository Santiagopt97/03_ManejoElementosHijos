const body = document.querySelector("body")

const ejecutar = document.querySelector("#btn-ejecutar")

/* ejecutar.addEventListener("click", () =>{
    alert("Hola pablitop")
}) */

function creaateButtonSuccess(){
    const button = document.createElement("button")
    button.setAttribute("type", "button") // esto sirve para cualquier tipo de atributo, no solo para el type
/*     button.type = "button" //es lo mismo que la de arriba */

    button.classList.add("btn","btn-success") //recibe mas de una clase
    
}

