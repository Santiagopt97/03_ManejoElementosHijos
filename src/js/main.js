const main = document.querySelector("main")

const ejecutar = document.querySelector("#btn-ejecutar")

ejecutar.addEventListener("click", () =>{
    // Crear
    // const btnResponse = createButtonSuccess()

    // Borrar
    // const btnForDelete = selectOneButton()
    // removeBtn(btnForDelete)

    // Reemplazar
    /* const newBtn = createButtonSuccess()
    const existentBtn = selectInfoButton()
    main.replaceChild(newBtn, existentBtn) */

    // insertBefore -> Permite elegir dónde insertar el elemento.

    const newBtn = createButtonSuccess()
    const existentBtn = selectInfoButton()
    main.insertBefore(newBtn, existentBtn)
}) 


function createButtonSuccess(){
    const button = document.createElement("button")
    button.setAttribute("type", "button") // esto sirve para cualquier tipo de atributo, no solo para el type
/*     button.type = "button" //es lo mismo que la de arriba */

    button.classList.add("btn","btn-success") //recibe mas de una clase

    button.textContent = "hello"

    return button
}

function selectInfoButton(){
    const btnFound = document.querySelector(".btn-info")
    return btnFound
}

function removeBtn(btn){
    main.removeChild(btn)
}




