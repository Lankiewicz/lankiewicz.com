//ScrollReveal - efekt wjeżdzających napisów
    window.sr = ScrollReveal();
    sr.reveal('.banner',{ 
       duration: 1500
    });
       sr.reveal('.header-about-me',{
       origin: 'left', 
       distance: '50vw', 
       duration: 2000, 
       viewFactor: 0.5
    });
       sr.reveal('.paragraf-about-me',{
       duration: 4500,
        origin: 'left',
        distance: '3vw'
    });
       sr.reveal('.text-about-me', {
        duration: 2000,
        origin:'left',
        distance: '3vw'
    });
       sr.reveal('.header-contact',{
       origin: 'left', 
       distance: '50vw', 
       duration: 2000, 
       viewFactor: 0.5
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



