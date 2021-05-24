let btnNav = document.querySelector('.mobile');
let links = document.querySelector('.links');
let btnClose = document.querySelector('.close');
let btnLinks = document.querySelectorAll('li')


const fecharLinks = () =>{
fecharNav();
}
const abrirNav = () =>{
    links.style.left = 0;
}
const fecharNav = () =>{
    links.style.left = '-100%';
}

btnNav.addEventListener('click', abrirNav)
btnClose.addEventListener('click', fecharNav);
