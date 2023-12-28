const dayInput = document.querySelector("#day")
const monthInput = document.querySelector("#month")
const yearInput = document.querySelector("#year")
const submitBtn = document.querySelector("button")

const inputStatus = {
    day: null,
    month: null,
    year: null,
}

function validateInput(e) {
    const para = document.createElement("p")
    para.classList.add("warn")

    const targetElement = e.target
    console.log(targetElement.parentElement)
    const targetValue = +e.target.value
    const targetMin = +targetElement.min
    const targetMax = +targetElement.max

    if (targetElement.nextElementSibling) {
        targetElement.nextElementSibling.remove()
    }

    if (targetValue >= targetMin && targetValue <= targetMax) {
        targetElement.parentElement.children[0].classList.remove("err-text")
        targetElement.parentElement.children[1].classList.remove("err-border")
        if (targetElement.id === "day") {
            inputStatus.day = true;
        } else if (targetElement.id === "month") {
            inputStatus.month = true;
        } else if (targetElement.id === "year") {
            inputStatus.year = true;
        }
    }

    if (targetElement.value === null || targetElement.value === "") {
        para.textContent = "This field is required"
        targetElement.parentElement.append(para)
        targetElement.parentElement.children[0].classList.add("err-text")
        targetElement.parentElement.children[1].classList.add("err-border")
    } else if (targetValue < targetMin || targetValue > targetMax) {
        para.textContent = getErrorMessage(targetElement)
        targetElement.parentElement.append(para)
    }

    return false
}

const inputs = document.querySelectorAll("input")
for (const input of inputs) {
    input.addEventListener("blur", (e) => {
        validateInput(e)

    })
}

function getBOD() {
    const dayStr = dayInput.value.length < 2 ? `0${dayInput.value}` : dayInput.value
    const monthStr = monthInput.value.length < 2 ? `0${monthInput.value}` : monthInput.value
    const yearStr = yearInput.value
    return `${monthStr}/${dayStr}/${yearStr}`
}

function getErrorMessage(element) {
    let message;
    if (element.id === "day") {
        message = "Must be a valid day"
    } else if (element.id === "month") {
        message = "Must be a valid month"
    } else if (element.id === "year") {
        if (element.value < 1970) {
            message = "Must be in above 1970"
        } else {
            message = "Must be in the past"
        }
    }
    return message
}



submitBtn.addEventListener("click", (e) => {
    const result = document.querySelector("#age-result")
    const warning = document.querySelector("#warning")
    warning.textContent = `Enter a valid date please`
    e.preventDefault()
    if (inputStatus.day && inputStatus.month && inputStatus.year) {
        const now = new Date();
        const bod = new Date(getBOD())
        const diffTime = Math.abs(now - bod);
        const diffDate = new Date(diffTime);
        const getYear = diffDate.getFullYear() - 1970;
        const getMonth = diffDate.getMonth();
        const getDate = diffDate.getDate() - 1;
        console.log(getYear, getMonth, getDate)
        warning.classList.add("hidden")
        result.classList.remove("hidden")
        const year = document.querySelector("span#year")
        year.innerHTML = getYear
        const month = document.querySelector("span#month")
        month.innerHTML = getMonth
        const date = document.querySelector("span#date")
        date.innerHTML = getDate
    } else {
        warning.classList.remove("hidden")
        result.classList.add("hidden")
    }

})