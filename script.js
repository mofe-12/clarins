let menu = document.querySelector('#menu-btn');
let navber = document.querySelector('.navber');
   
menu.onclick = () =>{
 menu.classList.toggle('fa-times');   
 navber.classList.toggle('active');

}
document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{



if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
}
else{
    document.querySelector('.header').classList.remove('active');
}

    menu.classList.remove('fa-times');   
    navber.classList.remove('active'); 

}
window.onload = () =>{

if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
}
else{
    document.querySelector('.header').classList.remove('active');
}
}
document.querySelector('.face').onmousemove = (e) =>{

 document.querySelectorAll('face-parallax').forEach(elm =>{
    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = 'translateX(${y}px) translateY(${x}px)';

 });
};



document.querySelector('.face').onmouseleave = () =>{

 document.querySelectorAll('face-parallax').forEach(elm =>{
  

    elm.style.transform = 'translateX(0px) translateY(0px)';

 });
};

var swiper = new Swiper(".clarins-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        
      },
      991: {
        slidesPerView: 3,
        
      },
    },
  });


  var swiper = new Swiper(".perfumes-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        
      },
      991: {
        slidesPerView: 3,
        
      },
    },
  });



  
  var swiper = new Swiper(".sunscreen-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        
      },
      991: {
        slidesPerView: 3,
        
      },
    },
  });





  
  var swiper = new Swiper(".hair-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        
      },
      991: {
        slidesPerView: 3,
        
      },
    },
  });








  
  var swiper = new Swiper(".makeup-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        
      },
      991: {
        slidesPerView: 3,
        
      },
    },
  });





































