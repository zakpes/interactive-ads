
// get current time
let timeContainer = document.querySelectorAll(".time");


document.addEventListener("DOMContentLoaded", () => {setInterval(() => {
    let date = new Date();
    timeContainer.forEach( (el) => {
        let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        el.textContent = `${date.getHours()}:${minutes}`;
    })
}, 1000)});
