//ScrollReveal - efekt wjeżdzających napisów
    window.sr = ScrollReveal();
      sr.reveal('.banner',{ 
       duration: 2000,
       origin: 'left'
    });
       sr.reveal('.header-about-me',{
       origin: 'left', 
       distance: '50vw', 
       duration: 2000, 
       viewFactor: 0.5
    });
       sr.reveal('.text-about-me',{
       distance: '50vw', 
       duration: 2500
    });
       sr.reveal('.paragraf-about-me',{
       distance: '50px', 
       duration: 4500
    });
       sr.reveal('.header-contact',{
       origin: 'left', 
       distance: '50vw', 
       duration: 2000, 
       viewFactor: 0.9
    });
        sr.reveal('.what-i-am', {
        distance: '50px', 
       duration: 3000
    });
        sr.reveal('.what-i-do', {
        distance: '50px', 
       duration: 3000
    });
         sr.reveal('.what-i-am-paragraf', {
        distance: '50px', 
       duration: 5000
    });
          sr.reveal('.what-i-do-paragraf', {
        distance: '50px', 
       duration: 5000
    });

$('.menu-container').click(function() {
  $(this).toggleClass('opened');
});



