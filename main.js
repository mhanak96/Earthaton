['use strict']

const sectionHeader = document.querySelector(".header");

const obs = new IntersectionObserver(function(entries){
    const entrie = entries[0];
    if(entrie.isIntersecting === false){
        document.querySelector('.primary-nav').classList.add('sticky'); 
    }
    if(entrie.isIntersecting === true){
        document.querySelector('.primary-nav').classList.remove('sticky'); 
    }
       
    
}, {
    root: null,
    threshold: 0,
    rootMargin: "-140px",
});
obs.observe(sectionHeader)