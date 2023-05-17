
const btnNext = document.querySelector('.btnNext')
const h1 = document.querySelector('.f-title')
const foodItem = document.querySelectorAll('.food-item')
const priceOffer = document.querySelector('#price-offer')
const inputOffer = document.querySelector('.input-offer')

priceOffer.addEventListener('click', () => {
    inputOffer.classList.add('inputActive')
})


 