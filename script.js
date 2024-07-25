// Navbar Stuff
// const experienceSection = document.querySelector('.experience-section');
// const scrollWatcher = document.createElement('div');

// scrollWatcher.setAttribute('data-scroll-watcher', '');
// primaryHeader.before(scrollWatcher)

// const navObserver = new IntersectionObserver((entries) => {
//     experienceSection.classList.toggle('sticking', !entries[0].isIntersecting)
// }, {rootMargin: "200px 0px 0px 0px"});

// navObserver.observe(scrollWatcher);

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const linkClose = document.getElementsByClassName('nav__link')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   });
}

/* Menu hidden */
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

// Animations
// let sections = document.querySelectorAll('section');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;

//         if (top >= offset && top < offset + height) {
//             sec.classList.add('show-animate');
//         }
//         // for repeating animations
//         else {
//             sec.classList.remove('show-animate');
//         }
//     })
// }

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

