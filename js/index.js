//ScrollReveal - efekt wjeżdzających napisów
    window.sr = ScrollReveal();
    sr.reveal('.banner',{
       origin: 'left', 
       distance: '50vw', 
       duration: 1000, 
       viewFactor: 0.5 
    });
       sr.reveal('.header-about-me',{
       origin: 'left', 
       distance: '50vw', 
       duration: 1000, 
       viewFactor: 0.5
    });
       sr.reveal('p',{
       origin: 'top', 
       distance: '50vw', 
       duration: 3300, 
       viewFactor: 0.5
    });
$('.menu-container').click(function() {
  $(this).toggleClass('opened');
});



