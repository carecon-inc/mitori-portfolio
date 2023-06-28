// var hamburgerElements = document.querySelectorAll(".hamburger");
// hamburgerElements.forEach(function (element) {
//     element.addEventListener("click", function () {
//         this.classList.toggle("open");
//     });
// });

document.querySelector(".hamburger").addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector("#g-nav").classList.toggle('panelactive');
    document.querySelector(".circle-bg").classList.toggle('circleactive');
});

document.querySelectorAll("#g-nav a").forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelector(".hamburger").classList.remove('open');
        document.querySelector(".hamburger").classList.remove('active');
        document.querySelector("#g-nav").classList.remove('panelactive');
        document.querySelector(".circle-bg").classList.remove('circleactive');
    });
});

