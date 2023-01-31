"use strict"

document.addEventListener("DOMContentLoaded", function() {

    document.querySelector(".burger").addEventListener("click", function() {

      document.querySelector(".header_nav").classList.toggle("is-active")

    });    
    
  });



  const swiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nexEl: '.swiper-button-next',
      prevEl: '.swiper-button-prew',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      ariableWidth: true,
    },
   
  });

 /* document.addEventListener("DOMContentLoaded", function() {
    let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass:	'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false
  });
  })
  */

  $(".accordion").accordion({
    collapsible:true,
    active:false,
  });
  


  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".header__button").forEach(function (e) {
       e.addEventListener("click", function () {
          e.classList.add("header__button--color"),
          document.querySelectorAll
          (".header__wrapper-search").forEach(function (e) { 
            e.classList.add("search-active")
           })
        })
     }),
     document.querySelectorAll(".search-close").forEach(function (e) {
        e.addEventListener("click", function () {
           document.querySelectorAll
           (".header__wrapper-search ").forEach(function (e) {
            e.classList.remove("search-active") 
             }),  
             document.querySelectorAll(".header__button")  
             .forEach(function (e) {
              e.classList.remove("header__button--color")
              })
         })
      })
 })
 

 let tabsBtn = document.querySelectorAll('.main_work_list_item a');
 let tabsItem = document.querySelectorAll('.main_work_cont');

 tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    e.preventDefault();
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){btn.classList.remove('main_work_btn__active')});
    e.currentTarget.classList.add('main_work_btn__active');

    tabsItem.forEach(function(element){
      element.classList.remove('main_work_text__active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('main_work_text__active');
    });
 });
