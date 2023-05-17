let navburger = document.querySelector('.nav-burger');
let body = document.querySelector('.nav-menu');
let menu = document.querySelector('.nav-menu');
let exit = document.querySelector('.exit');
let title = document.querySelector('#title')
let navbar = document.querySelector('.navbar')


/* On click burger and cross*/
navburger.addEventListener('click', () => {
    menu.classList.toggle('active')
})


body.addEventListener('click', () => {
  menu.classList.remove('active')
  console.log('hei')
})

exit.addEventListener('click', () => {
  menu.classList.remove('active')
})

const navHeight = 0;
let lastScrollY = 0;
const delta = 0;


const scrolled = () =>{
  let sy = window.scrollY
  if(Math.abs(lastScrollY - sy) > delta){
    if(sy>lastScrollY && sy > navHeight){
      navbar.classList.add('nav-up')
    }
    else if(sy<lastScrollY){
      navbar.classList.remove('nav-up')
    }
    lastScrollY = sy
  }
}

let didscroll = false


window.addEventListener('scroll', () =>{
  didscroll = true;
})


setInterval(() =>{
  if(didscroll==true){
    scrolled()
    didscroll = false
  }
}, 250)


