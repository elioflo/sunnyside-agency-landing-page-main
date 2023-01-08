const btn = document.getElementById('btn')
const menu = document.getElementById('menu')

btn.addEventListener('click',(e) => {
    menu.classList.toggle('nav__menu--clicked')
})