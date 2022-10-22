['use strict']

const sectionHeader = document.querySelector(".header");
const navToogle = document.querySelector('.mobile-nav-toogle');

const obs = new IntersectionObserver(function(entries){
    const entrie = entries[0];
    if(entrie.isIntersecting === false){
        document.querySelector('.primary-nav').classList.add('sticky'); 
        navToogle.classList.add('.sticky-mobile');
    }
    if(entrie.isIntersecting === true){
        document.querySelector('.primary-nav').classList.remove('sticky'); 
        navToogle.classList.remove('.sticky-mobile');
    }
       
    
}, {
    root: null,
    threshold: 0,
    rootMargin: "-140px",
});
obs.observe(sectionHeader)

//mobile toogle
const nav = document.querySelector('.primary-nav');


navToogle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if(visibility === "false"){
        nav.setAttribute('data-visible', true);
        navToogle.setAttribute('aria-expanded', true);
    }

    else{
        nav.setAttribute('data-visible', false);
        navToogle.setAttribute('aria-expanded', false);
    }
})

//
const nav_items = document.querySelectorAll('.primary-nav__item');

nav_items.forEach(item => item.addEventListener('click', function(){
    nav.setAttribute('data-visible', false);
    navToogle.setAttribute('aria-expanded', false);
}))