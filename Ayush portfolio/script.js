
// ==========================================
// AYUSH BAJPAI - PORTFOLIO JAVASCRIPT
// ==========================================

// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    menuToggle.textContent = navMenu.classList.contains("active")
        ? "✕"
        : "☰";
});

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// 2. TYPING ANIMATION

const typingElement = document.getElementById("typing");

const roles = [
    "AI & ML Student",
    "Computer Science Student",
    "Developer",
    "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;

            setTimeout(typeEffect, 1300);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();


// 3. SCROLL REVEAL

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// 4. 3D PROFILE TILT

const profileCard = document.getElementById("profileCard");

const heroVisual = document.querySelector(".hero-visual");

if (profileCard && heroVisual) {

    heroVisual.addEventListener("mousemove", (event) => {

        const rect = profileCard.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        profileCard.style.animation = "none";

        profileCard.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    heroVisual.addEventListener("mouseleave", () => {

        profileCard.style.transform = "";
        profileCard.style.animation = "";

    });
}


// 5. MOUSE GLOW

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    if (!cursorGlow) return;

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

});


// 6. STAR BACKGROUND

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];
let width;
let height;

function resizeCanvas() {

    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    stars = [];

    const numberOfStars = Math.min(
        180,
        Math.floor((width * height) / 7000)
    );

    for (let i = 0; i < numberOfStars; i++) {

        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5,
            opacity: Math.random(),
            speed: Math.random() * 0.008 + 0.002
        });

    }
}

function animateStars() {

    ctx.clearRect(0, 0, width, height);

    stars.forEach(star => {

        star.opacity += star.speed;

        if (star.opacity > 1 || star.opacity < 0.15) {
            star.speed *= -1;
        }

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(160, 190, 255, ${star.opacity})`;

        ctx.fill();

    });

    requestAnimationFrame(animateStars);
}

resizeCanvas();
animateStars();

window.addEventListener("resize", resizeCanvas);


// 7. DYNAMIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// 8. NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(7, 9, 16, 0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        navbar.style.background = "rgba(7, 9, 16, 0.78)";
        navbar.style.boxShadow = "none";

    }

});


// 9. PROJECT CARD SUBTLE TILT

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 4;
        const rotateX = ((y / rect.height) - 0.5) * -4;

        card.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});
