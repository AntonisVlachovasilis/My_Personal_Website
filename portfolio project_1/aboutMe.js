
const counter = document.querySelector('.one');
const counterTwo = document.querySelector('.two');
const counterThree = document.querySelector('.three');
const counterFour = document.querySelector('.four');
const counterFive = document.querySelector('.five');
const counterSix = document.querySelector('.six');
const htm = document.querySelector('.htm');
const cs = document.querySelector('.cs');
const jav = document.querySelector('.jav');
const boot = document.querySelector('.boot');
const hub = document.querySelector('.hub');
const term = document.querySelector('.term');

let load = 0
let int = setInterval(loader, 30)

function loader() {
    load++
    if (load > 89) {
        clearInterval(int);
    }
    htm.innerText = `${load}%`;
    counter.style.background = `conic-gradient(#64ffda ${(3 * load) + 45}deg, #0a192f 0deg)`;
}


let loadTwo = 0
let intTwo = setInterval(loaderTwo, 30)
function loaderTwo() {
    loadTwo++
    if (loadTwo > 84) {
        clearInterval(intTwo);
    }
    cs.innerText = `${loadTwo}%`;
    counterTwo.style.background = `conic-gradient(#64ffda ${(3 * loadTwo) + 40}deg, #0a192f 0deg)`;
}

let loadThree = 0
let intThree = setInterval(loaderThree, 30)
function loaderThree() {
    loadThree++
    if (loadThree > 74) {
        clearInterval(intThree);
    }
    jav.innerText = `${loadThree}%`;
    counterThree.style.background = `conic-gradient(#64ffda ${(3 * loadThree) + 30}deg, #0a192f 0deg)`;
}

let loadfour = 0
let intfour = setInterval(loaderfour, 30)
function loaderfour() {
    loadfour++
    if (loadfour > 89) {
        clearInterval(intfour);
    }
    boot.innerText = `${loadfour}%`;
    counterFour.style.background = `conic-gradient(#64ffda ${(3 * loadfour) + 45}deg, #0a192f 0deg)`;
}

let loadfive = 0
let intfive = setInterval(loaderfive, 30)
function loaderfive() {
    loadfive++
    if (loadfive > 79) {
        clearInterval(intfive);
    }
    hub.innerText = `${loadfive}%`;
    counterFive.style.background = `conic-gradient(#64ffda ${(3 * loadfive) + 35}deg, #0a192f 0deg)`;
}

let loadSix = 0
let intSix = setInterval(loaderSix, 30)
function loaderSix() {
    loadSix++
    if (loadSix > 79) {
        clearInterval(intSix);
    }
    term.innerText = `${loadSix}%`;
    counterSix.style.background = `conic-gradient(#64ffda ${(3 * loadSix) + 35}deg, #0a192f 0deg)`;
}

const burger = document.querySelector('.burger');
const lone = document.querySelector('.lone');
const ltwo = document.querySelector('.ltwo');
const lthree = document.querySelector('.lthree');
const slide = document.querySelector('.slide');


burger.addEventListener('click', () => {
    if (!lone.classList.contains('activeOne') && !lthree.classList.contains('activeTwo')) {
        lone.classList.add('activeOne');
        lthree.classList.add('activeTwo');
        ltwo.style.display = 'none';

        slide.classList.add('rail');
        document.querySelector('#content').style.opacity = "0.2";
    } else {
        lone.classList.remove('activeOne');
        lthree.classList.remove('activeTwo');
        ltwo.style.display = 'block';
        slide.classList.remove('rail');

        document.querySelector('#content').style.opacity = "1";
    }
})
