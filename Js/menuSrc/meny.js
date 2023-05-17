const buttons = document.querySelectorAll('.nav-button')
const items = document.querySelectorAll('.item')
const adds = document.querySelectorAll('#plus')
const minuses = document.querySelectorAll('#minus')
const counter = document.querySelector('#counter')
const itemcounter = document.querySelector('.item-counter')
const order = document.querySelector('.order')
const modal = document.querySelector('figure')
const main = document.querySelector('main')
const sections = document.querySelectorAll('section')
const modalbtn = document.querySelector('#modal-btn')
const infoCounts = document.querySelectorAll('#item-info-count')
const gridContainer = document.querySelector('.grid-container')
const caretD = document.querySelector('#caretDown')
const sideOrder = document.querySelector('.order-container')
const totalSum = document.querySelector('#totalSum')
const placeInput = document.querySelectorAll('.placeInput')
const deliveryInput = document.querySelectorAll('.deliveryInput')
const placeInfo = document.querySelector('#placeInfo')
/* menu cards */

const foodItems = [
  {
    title: 'Tyrkisk kebabrull',
    bilde: '../Images/Food/menuItem2.jpg',
    subText: 'Myk tortilla eller pitabrød fylt med sterkt kjøtt',
    pris: '25',
    id:"asdas",
    foodType: 'kebab'
  },
  {
    title: 'Øl',
    bilde: '../Images/Food/menuItem.jpg',
    subText: 'Myk tortilla eller pitabrød fylt med sterkt kjøtt',
    pris: '45',
    id:"dfsdsa",
    foodType: 'drikke'
  },
  {
    title: 'Pizza',
    bilde: '../Images/Food/menuItem2.jpg',
    subText: 'Myk tortilla eller pitabrød fylt med sterkt kjøtt',
    pris: '65',
    id:"fghfjy",
    foodType: 'pizza'
  },
   {
    title: 'Feit burger',
    bilde: '../Images/Food/menuItem5.jpg',
    subText: 'Myk tortilla eller pitabrød fylt med sterkt kjøtt',
    pris: '45',
    id:"gjgjy",
    foodType: 'burger'
  },
  {
    title: 'Tyrkisk kebabrull',
    bilde: '../Images/Food/menuItem3.jpg',
    subText: 'Myk tortilla eller pitabrød fylt med sterkt kjøtt',
    pris: '25',
    id:"isefsf",
    foodType: 'kebab'
  },
  {
    title: 'Burger',
    bilde: '../Images/Food/menuItem2.jpg',
    subText: 'Myk tortilla eller pitabrød fylt med sterkt kjøtt',
    pris: '85',
    id:"asdwqd",
    foodType: 'burger'
  },
   {
    title: 'Tyrkisk kebabrull',
    bilde: '../Images/Food/menuItem3.jpg',
    subText: 'Myk tortilla eller pitabrød fylt med sterkt kjøtt',
    pris: '35',
    id:"xcvdfv",
    foodType: 'kebab'
  },
  {
    title: 'Tyrkisk kebabrull',
    bilde: '../Images/Food/menuItem.jpg',
    subText: 'Myk tortilla eller pitabrød fylt med sterkt kjøtt',
    pris: '45',
    id:"dvxx",
    foodType: 'kebab'
  },
  {
    title: 'Afrikansk kebabrull',
    bilde: '../Images/Food/menuItem3.jpg',
    subText: 'Myk tortilla eller pitabrød fylt med sterkt kjøtt',
    pris: '115',
    id:"qwecds",
    foodType: 'kebab'
  },

]



let basket = JSON.parse(localStorage.getItem("data")) || [];

const foodCardGenerator = () => {
 foodItems.forEach(foodItem => {
  let {bilde, title, subText, pris, id } = foodItem
 let search = basket.find((x) => x.newId === id) || [];

  gridContainer.innerHTML += `
   <div class="item paras">
                <img src=${bilde} height="200px" width="200px">
                <div class="item-text">
                    <div class="main-text">
                        <h3>${title}</h3>
                        <p>${subText}</p>
                    </div>
                    <div class="sub-text">
                        <div class="items-info">
                            <h3>${pris}kr</h3>
                        </div> 
                        <div class="addDelete">
                            <img onclick="decrement(${id})" src="../Images/Icons/minus-solid.svg" height="20px" width="20px" id="plus"/>
                            <h4 id="item-info-count"><span id="${id}">
                            ${search.items === undefined ? 0 : search.items}
                            </span></h4>
                            <img onclick="increment(${id})" src="../Images/Icons/plus-solid.svg" height="20px" width="20px" id="minus"/>
                        </div>
                    </div>
                </div>
            </div>
  `
  

  
  

 }) 
  

  
}
foodCardGenerator()

let sideOrderGenerator = () =>{
  if(basket.length !== 0){
    return sideOrder.innerHTML = basket.map((x) => {
      let {newId, items} = x
       let search = foodItems.find((y) => y.id === newId) || [];
      totalSum.innerHTML = `${search.pris * items} kr`
       return `
       <div class="order-item">
          <div class="order-item-title">
              <img src=${search.bilde} >
              <div class="order-text">
                  <h4>${search.title}</h4>
                  <p>${items * Number(search.pris)}kr</p>
              </div>
          </div>
          <div class="order-item-addDelete">
              <img onclick="decrement(${newId})" src="../Images/Icons/minus-solid.svg" height="15px" width="15px" id="plus"/>
              <h4 ><span>${items}</span></h4>
              <img onclick="increment(${newId})" src="../Images/Icons/plus-solid.svg" height="15px" width="15px" id="minus"/>
          </div>
       </div>
       
       `

    })
    .join(" ")
  }else{
    sideOrder.innerHTML = `Ingenting er her. <br><br> Bestill i menyen til høyre`
  }
}
sideOrderGenerator()

let increment = (id) => {
  let selectedItem = id
  console.log(selectedItem)
  let search = basket.find((x) => x.newId === selectedItem.id)

  console.log(search)
  if(search === undefined){
    basket.push({
      id: selectedItem,
      items: 1,
      newId: selectedItem.id
    })
  }
 else {
    search.items += 1;
  }

  sideOrderGenerator()
  
  //console.log(basket)
  update(selectedItem)
  
  localStorage.setItem("data", JSON.stringify(basket))
}
let decrement = (id) => {
  let selectedItem = id
  let search = basket.find((x) => x.newId === selectedItem.id)
  if(search === undefined) return;
  else if(search.items === 0) return;
  else{
    search.items -= 1;
  }




  
  update(selectedItem)

  basket = basket.filter((x) => x.items !== 0 )
  sideOrderGenerator()
 // console.log(basket)

  localStorage.setItem("data", JSON.stringify(basket)) 
}

let update = (id) => {
  let selectedItem = id
  let search = basket.find((x) => x.newId === selectedItem.id)
  let newCount = document.getElementById(id.id)
  console.log(search)
  newCount.innerHTML = search.items
  calculation()
}


let calculation = () => {
  let itemValues = basket.map((x) => x.items).reduce((x,y) => x + y, 0);
  counter.innerHTML = itemValues
}
calculation()

/* Order bar */

caretD.addEventListener('click', () => {
  order.classList.toggle('orderActive')
  console.log('hello')
})

/* Modal item */

let modalToggle = () => {
  setTimeout(() => {
    modal.classList.add('activeModal')
    main.classList.add('blurBackground')
    sections.forEach(sect => {
      sect.classList.add('blurBackground')
    })
    modalbtn.addEventListener('click', (e) => {
      e.preventDefault()
      modal.style.display = `none`
      document.cookie =
      main.classList.remove('blurBackground')
      sections.forEach(sect => {
        sect.classList.remove('blurBackground')
      })
      
    })
  
  }, 5000)
  
}

modalToggle()

const getCheckedInfo = () => {
  placeInput.forEach(input => {
    input.addEventListener('click', () => {
     if(input.value == 'haslum'){
      placeInfo.innerHTML = `+47 67 32 57 12 haslum`
     }
     else if(input.value == 'sandvika'){
      placeInfo.innerHTML = `+47 67 32 57 12 sanvika`
     }
     else if(input.value == 'bekkestua'){
      placeInfo.innerHTML = `+47 67 32 57 12 bekkestua`
     }


    })
  })
  
}
getCheckedInfo()




/* Menu filter */

const menuFilter = () => {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      console.log(button.id)
    })
  })
}

menuFilter()

