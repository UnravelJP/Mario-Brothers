const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() { // Quando licar no botão a caixa aparece vindo da esquerda. 
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}

function esconderForm() { //Quando clicar na mascara a caixa de formulário irá sumir, voltando para a esquerda.
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}
