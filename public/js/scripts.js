const baseUrl = window.location.origin;
const brandLogo = document.querySelector("#brand-logo")

const toggleButton = document.querySelector("#toggle-button")
const mainNavBar = document.querySelector('#main-navbar')


toggleButton.addEventListener("click", () => {
    mainNavBar.toggleAttribute("data-visible")
})
