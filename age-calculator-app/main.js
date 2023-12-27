const dayInput = document.querySelector("#day")
const monthInput = document.querySelector("#month")
const yearInput = document.querySelector("#year")
const submitBtn = document.querySelector("button")

function getBOD() {
    const dayStr = dayInput.value.length < 2 ? `0${dayInput.value}` : dayInput.value
    const monthStr = monthInput.value.length < 2 ? `0${monthInput.value}` : monthInput.value
    const yearStr = yearInput.value
    return `${monthStr}/${dayStr}/${yearStr}`
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const now = new Date();
    const bod = new Date(getBOD())
    const diffTime = Math.abs(now - bod);
    const diffDate = new Date(diffTime);
    const getYear = diffDate.getFullYear() - 1970;
    const getMonth = diffDate.getMonth();
    const getDate = diffDate.getDate() - 2;
    console.log(getYear, getMonth, getDate)

    const year = document.querySelector("span#year")
    year.innerHTML = getYear
    const month = document.querySelector("span#month")
    month.innerHTML = getMonth
    const date = document.querySelector("span#date")
    date.innerHTML = getDate

})