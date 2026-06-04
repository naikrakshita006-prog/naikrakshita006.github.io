// ==============================
// TYPING EFFECT
// ==============================

const typingText = document.getElementById("typing-text");

const words = [
    "MCA Student",
    "Java Full Stack Developer",
    "Web Developer",
    "Spring Boot Developer",
    "Software Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// ==============================
// SMOOTH SCROLL
// ==============================

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });

    });

});


// ==============================
// ACTIVE NAVBAR LINK
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(4,5,26,0.95)";

        navbar.style.boxShadow =
        "0 5px 25px rgba(255,47,146,0.15)";

    }
    else{

        navbar.style.background =
        "rgba(4,5,26,0.75)";

        navbar.style.boxShadow = "none";
    }

});


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
    ".education-card, .skill-card, .project-card, .contact-container p"
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// ==============================
// SCROLL TO TOP BUTTON
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#ff2f92;
color:white;
font-size:22px;
cursor:pointer;
display:none;
z-index:9999;
box-shadow:0 0 20px rgba(255,47,146,.5);
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// ==============================
// HERO IMAGE HOVER GLOW
// ==============================

const profileImage =
document.querySelector(".hero-image img");

if(profileImage){

    profileImage.addEventListener("mousemove",(e)=>{

        profileImage.style.boxShadow =
        "0 0 20px #ff2f92, 0 0 40px rgba(255,47,146,.7)";

    });

    profileImage.addEventListener("mouseleave",()=>{

        profileImage.style.boxShadow =
        "0 0 15px #ff2f92, 0 0 35px rgba(255,47,146,.5)";
    });

}


// ==============================
// PORTFOLIO LOADED
// ==============================

console.log(
"Rakshita Naik Portfolio Loaded Successfully 🚀"
);
AOS.init({
    duration: 1000,
    once: true
});
const toggle = document.getElementById("themeToggle");
AOS.init({
    duration: 1000,
    once: true
});
const toggle = document.getElementById("themeToggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});