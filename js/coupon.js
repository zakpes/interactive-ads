const couponArr = document.querySelectorAll(".btn-coupon");
const overlayArr = document.querySelectorAll(".btn-coupon-overlay");
couponArr.forEach( (el) => {
    el.addEventListener("click", (event) => {
        couponArr.forEach((coupon) => {coupon.classList.remove("move-out")});
        
            event.currentTarget.classList.add("focus-coupon");
            overlayArr.forEach((overlay) => {
                overlay.classList.add("hide");
            })
            // event.currentTarget.innerHTML = '<div class="scratch_container"><div class="scratch_viewport"><canvas id="js-scratch-canvas"></canvas></div></div>';
    })
})

// scratchcard
var scratch = new Scratch({
    canvasId: 'js-scratch-canvas-1',
    imageBackground: 'img/scratchcard.png',
    pictureOver: 'img/foreground.jpg',
    cursor: {
        png: '',
        cur: '',
        x: '20',
        y: '17'
    },
    radius: 20,
    nPoints: 100,
    percent: 50,
    callback: function () {
      alert('I am Callback.');
    },
    pointSize: { x: 3, y: 3}
});
// scratchcard
var scratch = new Scratch({
    canvasId: 'js-scratch-canvas-2',
    imageBackground: 'img/scratchcard.png',
    pictureOver: 'img/foreground.jpg',
    cursor: {
        png: '',
        cur: '',
        x: '20',
        y: '17'
    },
    radius: 20,
    nPoints: 100,
    percent: 50,
    callback: function () {
      alert('I am Callback.');
    },
    pointSize: { x: 3, y: 3}
});
// scratchcard
var scratch = new Scratch({
    canvasId: 'js-scratch-canvas-3',
    imageBackground: 'img/scratchcard.png',
    pictureOver: 'img/foreground.jpg',
    cursor: {
        png: '',
        cur: '',
        x: '20',
        y: '17'
    },
    radius: 20,
    nPoints: 100,
    percent: 50,
    callback: function () {
      alert('I am Callback.');
    },
    pointSize: { x: 3, y: 3}
});