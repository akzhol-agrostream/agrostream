(function() {
  new Glide('.section1', {
    type: 'carousel',
    startAt: 0,
    gap: 0,
    autoplay: 10000,
    animationDuration: 1000,
  }).mount();
  new Glide('.modules', {
    type: 'carousel',
    perView: 5,
    gap: 50,
    breakpoints: {
      1700: {
        perView: 4,
      },
      1400: {
        perView: 3,
      },
      1100: {
        perView: 2,
        gap: 25,
      },
      800: {
        perView: 1,
        gap: 0,
      },
    },
  }).mount();
})();
