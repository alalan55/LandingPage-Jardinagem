let btnNav = document.querySelector('.mobile');
let links = document.querySelector('.links');
let btnClose = document.querySelector('.close');
let btnLinks = document.querySelectorAll('li');
let titleCapa = document.querySelector('.titulo__capa');

let target = document.querySelectorAll('.animate');
let animateClass = 'animate__animated animate__fadeInLeft animate__delay-.8s';
let v1 = 'animate__animated'
let v2 ='animate__fadeInLeft'
let v3 ='animate__delay-.8s'

const debounce = (func, wait, immediate) =>{
    let timeout;
    return function(...args){
        const context = this;
        const later = () =>{
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args)
    }
}

const animeScroll = () =>{
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(val =>{
        if(windowTop > val.offsetTop){
            val.classList.add(v1, v2, v3);
        }else{
            val.classList.remove(v1, v2, v3);
        }
    })
}

animeScroll();

if(target.length)
{
    window.addEventListener('scroll', debounce(() =>{
        animeScroll();
    }, 100))
}

const fecharLinks = () =>{
fecharNav();
}
const abrirNav = () =>{
    links.style.left = 0;
}
const fecharNav = () =>{
    links.style.left = '-100%';
}
const removeClasseCapa = () =>{
    setTimeout(()=>{
        titleCapa.classList.remove('animate__fadeInLeft');
    }, 1300)
}
removeClasseCapa();

console.log(titleCapa)

btnNav.addEventListener('click', abrirNav)
btnClose.addEventListener('click', fecharNav);

