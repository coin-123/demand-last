
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If you want pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // If you want navigation buttons
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Autoplay (optional)
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });