var loader = document.getElementById("loader");
window.addEventListener("load", function() {
    loader.style.display = "none";
    document.querySelector(".welcome").classList.add("popup");
});

function visualmode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(function(e) {
        e.classList.toggle("invertapplied");
    });
}

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");
window.addEventListener("scroll", () => {
    let e = "";
    sections.forEach(t => {
        let o = t.offsetTop;
        if (pageYOffset >= o - 200) {
            e = t.getAttribute("id");
        }
    });
    mobilenavLi.forEach(t => {
        t.classList.remove("activeThismobiletab");
        if (t.classList.contains(e)) t.classList.add("activeThismobiletab");
    });
    navLi.forEach(t => {
        t.classList.remove("activeThistab");
        if (t.classList.contains(e)) t.classList.add("activeThistab");
    });
});

let Pupils = document.getElementsByClassName("footer-pupil");
let pupilsArr = Array.from(Pupils);
let pupilStartPoint = -10, pupilRangeX = 20, pupilRangeY = 15;
let mouseXStartPoint = 0, mouseXEndPoint = window.innerWidth;
let currentXPosition = 0, fracXValue = 0, mouseYEndPoint = window.innerHeight;
let currentYPosition = 0, fracYValue = 0, mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = e => {
    fracXValue = (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange;
    fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint;
    let t = pupilStartPoint + fracXValue * pupilRangeX;
    let o = pupilStartPoint + fracYValue * pupilRangeY;
    pupilsArr.forEach(e => {
        e.style.transform = `translate(${t}px, ${o}px)`;
    });
};
windowResize = e => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};
window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);
