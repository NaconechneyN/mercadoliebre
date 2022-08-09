const formRegister = document.getElementById('form-register')

formRegister.addEventListener("submit", event => {
    event.preventDefault()
    const elements = formRegister.elements
    if (elements["password"].value !== elements["password-repeat"].value) {
        alert("Las contraseñas no coinciden")
    } else {
        alert("Formulario enviado")
        location.href = baseUrl
    }
})