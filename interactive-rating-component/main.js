const rateButtons = document.querySelectorAll(".rate-container button");
const submitBtn = document.querySelector(".submit-btn")

let rate;

rateButtons.forEach((button) => {
    button.classList.contains("active") ? button.classList.remove("active") : null

    button.addEventListener("click", (e) => {
        rateButtons.forEach((btn) => {
            btn.classList.remove("active");
        });
        e.target.classList.toggle("active");
        rate = e.target.textContent;
    })
})

submitBtn.addEventListener("click", () => {
    const card = document.querySelector(".card");
    card.style.textAlign = "center"
    card.innerHTML = `
        <img src="./images/illustration-thank-you.svg" />
        <p class="selected-rate">You selected ${rate} of 5</p>

        <h2>Thank you!</h2>
        <p> We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!</p>
    `
})