function toggleMenu() {
    const btn = document.getElementById("menu-toggle")
    const nav = document.getElementsByTagName("nav")[0]

    btn.addEventListener("click", (e) => {
        const body = document.getElementsByTagName("body")[0]

        if (nav.classList.contains("show")) {
            nav.classList.remove("show")
            nav.classList.add("hide")
            nav.style.opacity = 0
            btn.style.backgroundImage = "url(/img/bars-solid.svg)"
            body.style.overflow = "auto"
        } else {
            nav.classList.remove("hide")
            nav.classList.add("show")
            nav.style.opacity = 100
            btn.style.backgroundImage = "url(/img/times-solid.svg)"
            body.style.overflow = "hidden"
        }
    })

    const navLinks = document.getElementsByClassName("navLink")

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", (e) => (nav.style.opacity = 0))
    }
}

toggleMenu()
