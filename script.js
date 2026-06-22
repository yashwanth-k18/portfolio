// =========================
// Typing Animation
// =========================

const typing = document.getElementById("typing");

const words = [
  "AI & Machine Learning Student",
  "Python Developer",
  "Machine Learning Enthusiast",
  "Full Stack Learner",
  "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  if (!typing) return;

  let current = words[wordIndex];

  if (!deleting) {

    typing.textContent = current.substring(0, charIndex++);

    if (charIndex > current.length) {

      deleting = true;

      setTimeout(typeEffect, 1500);

      return;

    }

  } else {

    typing.textContent = current.substring(0, charIndex--);

    if (charIndex < 0) {

      deleting = false;

      wordIndex++;

      if (wordIndex >= words.length) wordIndex = 0;

    }

  }

  setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();


// =========================
// Navbar Scroll Effect
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {

    header.style.background = "#081223";

    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

  }

  else {

    header.style.background = "rgba(8,18,35,.90)";

    header.style.boxShadow = "none";

  }

});


// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;

    if (pageYOffset >= sectionTop) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

      link.classList.add("active");

    }

  });

});


// =========================
// Scroll Reveal
// =========================

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";

      entry.target.style.transform = "translateY(0)";

    }

  });

});

document.querySelectorAll("section").forEach(sec => {

  sec.style.opacity = "0";

  sec.style.transform = "translateY(40px)";

  sec.style.transition = "all .8s ease";

  observer.observe(sec);

});


// =========================
// Card Hover Animation
// =========================

const cards = document.querySelectorAll(
".card,.skill-box,.project-card,.contact-card,.certificate-card"
);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

window.scrollTo({

top:target.offsetTop-70,

behavior:"smooth"

});

});

});


// =========================
// Button Animation
// =========================

const buttons=document.querySelectorAll(".btn,.btn-outline,.resume-btn,.resume-download");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


// =========================
// Footer Year
// =========================

const year=new Date().getFullYear();

const copy=document.querySelector(".copyright");

if(copy){

copy.innerHTML=`© ${year} Yashawanth K. All Rights Reserved.`;

}


// =========================
// Console Message
// =========================

console.log("%cPortfolio by Yashawanth K","color:#3B82F6;font-size:18px;font-weight:bold");