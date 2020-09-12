const couponArr = document.querySelectorAll(".btn-coupon");
const removedCouponArr = document.querySelectorAll(".focus-coupon");
const overlayArr = document.querySelectorAll(".scratchcard-overlay");

couponArr.forEach( (el) => {
    el.addEventListener("click", (event) => {
        console.log({removedCouponArr});
        event.currentTarget.classList.remove("focus-coupon");

        couponArr.forEach( (el) => {
            
            if (el.classList.contains("focus-coupon")) {
                el.classList.add("animate__fadeOutLeft");
            }
        })

        overlayArr.forEach(overlay => overlay.classList.add("d-none"));
    });
});

// couponArr.forEach( function(el) {
//     el.addEventListener("click", function(event, callback) {
//         event.currentTarget.classList.remove("focus-coupon");
//         overlayArr.forEach(overlay => overlay.classList.add("d-none"));
        
//         function () {
//             removedCouponArr.forEach((coupon) => {coupon.classList.add("animate__fadeOutLeft")});
//         }
//     })
// })

// couponArr.forEach(function(item) {
//     item.addEventListener("click", function() {
//         console.log("Clicked!");
//     });
// });

// for (let i = 0; i < overlayArr.length; i++) {
//     overlayArr[i].addEventListener("click", function() {
//         console.log("CLICKY");
//     })
    
// }

// overlayArr.addEventListener("click", function() {
//     console.log("CLIZK");
// })