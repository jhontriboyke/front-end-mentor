const dayInput = document.querySelector("#day")
const monthInput = document.querySelector("#month")
const yearInput = document.querySelector("#year")
const year = document.querySelector("span#year")
const month = document.querySelector("span#month")
const date = document.querySelector("span#date")

const inputStatus = {
    "day": false,
    "month": false,
    "year": false
}

function getBOD() {
    const dayStr = dayInput.value.length < 2 ? `0${dayInput.value}` : dayInput.value
    const monthStr = monthInput.value.length < 2 ? `0${monthInput.value}` : monthInput.value
    const yearStr = yearInput.value
    return `${monthStr}/${dayStr}/${yearStr}`
}

document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("blur", (e) => {
        validate(e.target)
        const button = document.querySelector("button")
        if (inputStatus.day === true && inputStatus.month === true && inputStatus.year === true) {
            button.disabled = false

        }
    })
})

function validate(element) {
    if (element.value === 0 || element.value === null || element.value === "") {
        element.nextElementSibling.textContent = "This field is required"
        element.nextElementSibling.classList.add("open")
        element.style.borderColor = "red"
        element.parentElement.children[0].style.color = "red"
        inputStatus[element.id] = false
    } else if (+element.value < +element.min || +element.value > +element.max) {
        element.nextElementSibling.classList.add("open")
        element.nextElementSibling.textContent = getErrorMsg(element)
        element.style.borderColor = "red"
        element.parentElement.children[0].style.color = "red"
        inputStatus[element.id] = false
    } else {
        element.nextElementSibling.textContent = "OK"
        element.nextElementSibling.classList.remove("open")
        element.style.borderColor = "black"
        element.parentElement.children[0].style.color = "black"
        inputStatus[element.id] = true
    }
}

function getErrorMsg(element) {
    let message;
    if (element.id === "day") {
        message = "Must be valid day"
    } else if (element.id === "month") {
        message = "Must be valid month"
    } else if (element.id === "year") {
        if (+element.value < +element.min) {
            message = `Must be equal or above ${element.min}`;
        } else if (+element.value > +element.max) {
            message = `Must be below ${element.max}`
        } else {
            message = `Must be valid year`
        }
    }
    return message;
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputStatus.day === true && inputStatus.month === true && inputStatus.year === true) {
        const now = new Date();
        const bod = new Date(getBOD())
        const diffTime = Math.abs(now - bod);
        const diffDate = new Date(diffTime);
        const getYear = diffDate.getFullYear() - 1970;
        const getMonth = diffDate.getMonth();
        const getDate = diffDate.getDate() - 1;
        console.log(getYear, getMonth, getDate)
        // e.target.nextElementSibling.textContent = "OK"
        e.target.nextElementSibling.classList.remove("open")
        e.target.style.borderColor = "black"
        e.target.parentElement.children[0].style.color = "black"

        year.innerHTML = getYear

        month.innerHTML = getMonth

        date.innerHTML = getDate
    }
})