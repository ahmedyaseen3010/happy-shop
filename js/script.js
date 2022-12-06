var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const bar =document.getElementById("bar");
  const nav =document.getElementById("navbar")
  const close =document.getElementById('close')
  if(bar){
    bar.addEventListener('click',()=>{
      nav.classList.add('active')
    })
  }
  if(close){
    close.addEventListener('click',()=>{
      nav.classList.remove('active')
    })
  }

