// ===========================
// Typing Effect
// ===========================

const roles = [
"MCA Student",
"Full Stack Developer",
"Android Developer",
"Cybersecurity Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const roleElement = document.querySelector(".hero-content h2");

function typeEffect() {

```
const currentRole = roles[roleIndex];

if (!isDeleting) {
    roleElement.textContent =
        currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
        return;
    }

} else {

    roleElement.textContent =
        currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
        isDeleting = false;
        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }
    }
}

setTimeout(typeEffect, isDeleting ? 50 : 100);
```

}

typeEffect();

// ===========================
// Scroll Reveal Animation
// ===========================

const revealElements = document.querySelectorAll(
".project-card, .skill-card, .about-container, .education-card"
);

function revealOnScroll() {

```
revealElements.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop =
        element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    }

});
```

}

revealElements.forEach((element) => {
element.style.opacity = "0";
element.style.transform = "translateY(40px)";
element.style.transition =
"all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===========================
// Active Navigation Link
// ===========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

```
let current = "";

sections.forEach(section => {

    const sectionTop =
        section.offsetTop - 150;

    const sectionHeight =
        section.clientHeight;

    if (
        pageYOffset >= sectionTop
        &&
        pageYOffset <
        sectionTop + sectionHeight
    ) {
        current = section.getAttribute("id");
    }

});

navLinks.forEach(link => {

    link.classList.remove("active");

    if (
        link.getAttribute("href")
        === "#" + current
    ) {
        link.classList.add("active");
    }

});
```

});

// ===========================
// Navbar Background on Scroll
// ===========================

window.addEventListener("scroll", () => {

```
const header =
    document.querySelector("header");

if (window.scrollY > 50) {

    header.style.background =
        "rgba(5,10,20,0.95)";

} else {

    header.style.background =
        "rgba(8,12,22,.55)";
}
```

});

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor => {

```
anchor.addEventListener(
    "click",
    function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });

    }
);
```

});
