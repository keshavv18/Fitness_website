let menubar = document.querySelector('#menu-bar')
let mynav =document.querySelector('.navbar')
let userform =document.querySelector('#user-form')
let userlogin =document.querySelector('.user-login')


menubar.onclick = () =>{

    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}


userform.onclick = () =>{
    userlogin.classList.toggle('active')
}
window.onscroll =() =>{
    userlogin.classList.remove('active')
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
    slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 3,
  },
      768: {
    slidesPerView: 2,
    spaceBetween: 40,
    slidesPerGroup: 1,
  },
  600: {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
  },
  400: {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
  },

}

  });