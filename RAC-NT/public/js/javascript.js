let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;
    index += step;
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }
    const carousel = document.querySelector(".carousel");
    carousel.style.transform = `translateX(-${index * 100}%)`;
}


const arrowUp = document.getElementById("arrow-up");
arrowUp.style.display = "none";
function videoHeight() {
    const videoHeight = document.getElementById("video-Page");
    const arrowDown = document.getElementById("arrow-down");
    const arrowUp = document.getElementById("arrow-up");
    arrowUp.style.display = "none";
    if (!videoHeight) return;
    const currentHeight = videoHeight.style.maxHeight;
    const newHeight = currentHeight === "140vh" ? "100% " : "140vh";
    videoHeight.style.maxHeight = newHeight;
    if (newHeight === "140vh") {
        arrowDown.style.display = "block";
        arrowUp.style.display = "none";
    } else {
        arrowDown.style.display = "none";
        arrowUp.style.display = "block";
    }
}


const menuToggle = document.getElementById("menu-toggle");
const offcanvasMenu = document.getElementById("offcanvas-menu");
const menuIcon = document.getElementById("menu-icon");
const bars = menuIcon.querySelector(".menu-bars");
const xMark = menuIcon.querySelector(".menu-x");

menuToggle.addEventListener("click", () => {
    offcanvasMenu.classList.toggle("-translate-x-full");
    bars.classList.toggle("hidden");
    xMark.classList.toggle("hidden");
});


const showMenu = document.querySelectorAll("#iconShowDropdown");
const ShowDropdown = document.querySelectorAll("#showdropdown");
document.addEventListener("click",(e)=>{
    for(let i=0;i<showMenu.length;i++){
        if(e.target === showMenu[i]){
            ShowDropdown[i].classList.toggle("hidden");
        }else{
            ShowDropdown[i].classList.add("hidden");
        }
    }
})


const showDataUl = document.querySelectorAll('#showdataul');
const showDataUlMenu = document.querySelectorAll("#showDataUlMenu");
const borderNone = document.querySelectorAll("#border-none");
document.addEventListener("click", (e) => {
    for (let i = 0; i < showDataUl.length; i++) {
        if (e.target === showDataUl[i]) {
            showDataUlMenu[i].classList.toggle("hidden");
            borderNone[i].classList.toggle("border-none")
        } else {
            continue;
        }
    }
});




