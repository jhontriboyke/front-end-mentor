const accordion = document.querySelectorAll(".accordion")

accordion.forEach((el) => {
    el.addEventListener("click", (e) => {
        const panel = e.target.nextElementSibling;
        const img = e.target.children[0]
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null
            img.src = "./assets/images/icon-plus.svg"
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
            img.src = "./assets/images/icon-minus.svg"
        }
    })
})

