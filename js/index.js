//ScrollReveal - efekt wjeżdzających napisów
    window.sr = ScrollReveal();
    sr.reveal('.banner',{
       origin: 'left', 
       distance: '50vw', 
       duration: 2000, 
       viewFactor: 0.5 
    });
       sr.reveal('.header-about-me',{
       origin: 'left', 
       distance: '50vw', 
       duration: 1000, 
       viewFactor: 0.5
    });
       sr.reveal('p',{
       duration: 2000
    });
$('.menu-container').click(function() {
  $(this).toggleClass('opened');
});



