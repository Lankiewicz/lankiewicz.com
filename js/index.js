$('.menu-container').click(function() {
  $(this).toggleClass('opened');
});

//ScrollReveal - efekt wjeżdzających napisów
    window.sr = ScrollReveal();
    sr.reveal('.banner', {
       origin: 'left', 
       distance: '50vw', 
       duration: 1000, 
       viewFactor: 0.5
    });
    /*sr.reveal('h2, p', {
        reset: true,
        delay: 300
    });*/