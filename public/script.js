// Nav bar
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const linkClose = document.getElementsByClassName('nav-link')

if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   });
}

if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   });
}

if (linkClose) {
    Array.from(linkClose).forEach(link => {
       link.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
       });
    });
 }

// Project Popup
function togglePopup() {
    document.getElementById("popup1").classList.toggle("active");
}

function togglePopup2() {
    document.getElementById("popup2").classList.toggle("active");
}

function togglePopup3() {
    document.getElementById("popup3").classList.toggle("active");
}

function togglePopup4() {
    document.getElementById("popup4").classList.toggle("active");
}

function togglePopup5() {
    document.getElementById("popup5").classList.toggle("active");
}

function togglePopup6() {
    document.getElementById("popup6").classList.toggle("active");
}

// Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
        if (el.isIntersecting) {
            el.target.classList.add('show-animate')
        } else {
            el.target.classList.remove('show-animate')
        }
    });
});

const entries = document.querySelectorAll('.hidden');
entries.forEach((el) => observer.observe(el));


const experienceObserver = new IntersectionObserver((experienceSections) => {
    experienceSections.forEach((sec) => {
        if (sec.isIntersecting) {
            sec.target.classList.add('show-animate')
        }
    });
});

const experienceSections = document.querySelectorAll('.experience-hidden');
experienceSections.forEach((sec) => experienceObserver.observe(sec));


const navObserver = new IntersectionObserver((navSections) => {
    navSections.forEach((sec) => {
        if (sec.isIntersecting) {
            sec.target.classList.add('show-animate')
        }
    });
});

const navSections = document.querySelectorAll('.nav-hidden');
navSections.forEach((sec) => navObserver.observe(sec));

