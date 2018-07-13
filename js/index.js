//ScrollReveal - efekt wjeżdzających napisów
    window.sr = ScrollReveal();
    sr.reveal('.banner',{ 
       duration: 2000,
       viewFactor: 0.6,
       origin: 'left'
    });
       sr.reveal('.header-about-me',{
       origin: 'left', 
       distance: '50vw', 
       duration: 2000, 
       viewFactor: 0.5
    });
       sr.reveal('.paragraf-about-me',{
       duration: 3000
    });
       sr.reveal('.text-about-me', {
        duration: 2000
    });
       sr.reveal('.header-contact',{
       origin: 'left', 
       distance: '50vw', 
       duration: 2000, 
       viewFactor: 0.9
    });
        sr.reveal('.what-i-am', {
        duration: 2000
    });
        sr.reveal('.what-i-do', {
        duration: 2000
    });
         sr.reveal('.what-i-am-paragraf', {
        duration: 3000
    });
          sr.reveal('.what-i-do-paragraf', {
        duration: 3000
       
    });
$('.menu-container').click(function() {
  $(this).toggleClass('opened');
});



