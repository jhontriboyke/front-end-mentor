const button = document.querySelector("button")
const quote = document.querySelector("p")
const advice = document.querySelector("h1")
const spinner = document.querySelector(".spinner-wrapper")

async function fetchQuote(obj) {
    spinner.classList.remove("hidden")
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const str = await response.json();
        displayQuote(str)
    } catch (error) {
        console.error(`Error occured: ${error}`)
    }
}

function displayQuote(obj) {
    spinner.classList.remove("hidden")
    const { slip } = obj
    quote.innerHTML = `<q>${slip.advice}</q>`;
    advice.textContent = `ADVICE #${slip.id}"`
    spinner.classList.add("hidden")
}

window.addEventListener("DOMContentLoaded", () => {
    fetchQuote()
})


button.addEventListener("click", () => {
    spinner.classList.remove("hidden")
    quote.innerHTML = ""
    advice.textContent = ""
    setTimeout(fetchQuote, 2000)
})