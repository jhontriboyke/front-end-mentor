let summaryData;

async function fetchData() {
    try {
        const response = await fetch("./data.json")
        const data = await response.json()
        summaryData = data;
        console.log(summaryData)
    } catch (error) {
        console.log("Error occured: " + error)
    }
}


const summaryWrapper = document.querySelector(".summary-wrapper")

async function updateSummary() {
    await fetchData();
    const summaryWrapper = document.querySelector(".summary-wrapper");
    summaryData.forEach(data => {
        const div = document.createElement("div");
        div.classList.add("summary");
        div.setAttribute("id", `${data.category.toLowerCase()}`)
        const title = document.createElement("div")
        title.classList.add("title")
        const img = document.createElement("img");
        img.setAttribute("src", data.icon);
        img.setAttribute("alt", `icon-${data.category.toLowerCase()}`);
        const para = document.createElement("p")
        para.textContent = `${data.category}`;
        title.appendChild(img);
        title.appendChild(para)
        const score = document.createElement("div")
        score.classList.add("score")
        score.textContent = `${data.score} / 100`;
        div.appendChild(title)
        div.appendChild(score)
        summaryWrapper.appendChild(div)
    });
}

document.addEventListener("DOMContentLoaded", updateSummary)

