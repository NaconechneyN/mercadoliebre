const base_url = window.location.origin;
const brandLogo = document.querySelector("#brand-logo")

const toggleButton = document.querySelector("#toggle-button")
const mainNavBar = document.querySelector('#main-navbar')

brandLogo.addEventListener("click", () => {
    location.href = base_url 
})

toggleButton.addEventListener("click", () => {
    mainNavBar.toggleAttribute("data-visible")
})