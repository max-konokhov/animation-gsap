// Анимация загрузки
let loadTimeLine = gsap.timeline();

loadTimeLine.from('.hero__title', {opacity: 0, y: 200, duration: 1},"+=1")
            .from('.hero__btn', {opacity: 0, y: 200, duration: 1}, "-=1")
            .from('.hero__descr', {opacity: 0, duration: 2})
            .from('.photo-1', {opacity: 0, scaleX: 0.8, scaleY: 0.8, duration: 1}, "-=1.5" )
            .from('.photo-2', {opacity: 0, duration: 1},"-=0.5")
            .from('.photo-3', {opacity: 0, duration: 1}, "-=0.5")
            .from('.photos__author', {opacity: 0, duration: 1}, "-=0.5")


//Открытие меню и анимация появления элементов.
let bgMenuBtn = document.querySelector('.burger');
let bgMenuBtnClose = document.querySelector('.close');
let bgMenu = document.querySelector('.menu');



//  Рабочий вариант анимации открытия и закрытия меню

const timeLine = gsap.timeline({paused: true});


timeLine
  .fromTo('.menu', {opacity: 0, display: "none"}, {opacity: 1, display: "block", duration: 2})
  .from('.menu__top', {opacity: 0, duration: 1, y: -140}, "-=1.5")
  .from('.menu__container', {opacity: 0, duration: 2, y: 80}, "-=2")
  .from('.nav__list', {opacity: 0, duration: 1, y: 50 }, "-=1")
  .from('.social', {opacity: 0, duration: 1, y: 50 }, "-=0.5")
  .from('.sub-menu', {opacity: 0, duration: 1, y: 50 }, "-=1");

bgMenuBtn.addEventListener('click', function(){
  timeLine.play();
});


bgMenuBtnClose.addEventListener('click', function(){
  timeLine.reverse();
})





