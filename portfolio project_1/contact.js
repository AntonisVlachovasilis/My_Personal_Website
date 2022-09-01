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
