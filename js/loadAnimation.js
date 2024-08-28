const observerS = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.add("show")
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((element) => observerS.observe(element))