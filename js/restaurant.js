const logo = document.querySelector(".logo-container");

const sectionFood = document.querySelector("#pick-food");
const sectionMoney = document.querySelector("#pick-money");
const sectionRestaurant = document.querySelector("#pick-restaurant");
const sectionLoc = document.querySelector("#location");

const btnStart = document.querySelector(".btn-start");
const btnIta = document.querySelector(".btn-italian");
const btnMex = document.querySelector(".btn-mexican");
const btnChi = document.querySelector(".btn-chinese");

const btnFoodArr = [btnIta, btnMex, btnChi];
const btnMoneyArr = document.querySelectorAll(".btn-dollar");
const btnRestaurantArr = document.querySelectorAll(".btn-r");

const locationRContainer = document.querySelector(".location-r-container");

btnStart.addEventListener("click", () => {
    logo.classList.add("logo-container-small");
    slideInSection(sectionFood);
})

btnFoodArr.forEach(function(el) {
    el.addEventListener("click", () => {
        slideInSection(sectionMoney);
    })
})

btnMoneyArr.forEach(function(el) {
    el.addEventListener("click", () => {
        slideInSection(sectionRestaurant);
    })
})

btnRestaurantArr.forEach(function(el) {
    el.addEventListener("click", (event) => {
        console.log(event.currentTarget);
        console.log(btnRestaurantArr[0]);

        let restaurant = event.currentTarget.outerHTML;
        
        locationRContainer.innerHTML = restaurant;
        
        slideInSection(sectionLoc);
    })
})

// btnIta.addEventListener("click", () => {
//     sectionMoney.style.transform = "translateX(0%)";
// })

const slideInSection = (section) => {
    section.style.transform = "translateX(0%)";
}
