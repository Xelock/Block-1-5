  if (innerWidth < 768) {

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: false,
      slidesPerView: 1.3,
      spaceBetween: 16,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  }


  let acer = document.querySelector(".swiper-slide:nth-child(7)")
  let sony = document.querySelector(".swiper-slide:nth-child(8)")
  let btn1 = document.querySelector(".button1")
  let btn2 = document.querySelector('.button2')
  
  btn1.addEventListener("click", function () {
    acer.classList.add('act-but');
    sony.classList.add('act-but');
    btn2.classList.add('act-but');
    btn1.classList.add('btn-show');
  });

  btn2.addEventListener('click', function () {
    acer.classList.remove('act-but');
    sony.classList.remove('act-but');
    btn2.classList.remove('act-but');
    btn1.classList.remove('btn-show');
  });