const header = document.getElementById('header');
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', function(){
    if(window.scrollY > 50){
        header.classList.add('header-scrolled')
    }
    else{
        header.classList.remove('header-scrolled')
    }
})