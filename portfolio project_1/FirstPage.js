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
        document.querySelector('#introduction').style.opacity = "0.2";
    } else {
        lone.classList.remove('activeOne');
        lthree.classList.remove('activeTwo');
        ltwo.style.display = 'block';
        slide.classList.remove('rail');

        document.querySelector('#introduction').style.opacity = "1";
    }
})


const text = document.querySelector('.text');
const nameMe = document.querySelector('.nameMe');
const moto = document.querySelector('.moto');
const hi = document.querySelector('.hi');

text.addEventListener('animationend', () => {
    text.style.whiteSpace = "normal";
})
nameMe.addEventListener('animationend', () => {
    nameMe.style.whiteSpace = "normal";
})
moto.addEventListener('animationend', () => {
    moto.style.whiteSpace = "normal";
})
hi.addEventListener('animationend', () => {
    hi.style.whiteSpace = "normal";
})
