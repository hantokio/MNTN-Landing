
let menuBtn = document.querySelector('.ham-menu-btn');
let menuLinks = document.querySelector('.link');
let menuBg = document.querySelector('.ham-menu');

menuBtn.addEventListener('click', function(e){
    e.preventDefault;
    menuBtn.classList.toggle('active');
    menuLinks.classList.toggle('links-active');
    menuBg.classList.toggle('bg-active');
});

