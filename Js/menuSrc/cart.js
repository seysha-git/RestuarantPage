
const basket = JSON.parse(localStorage.getItem("data")) || [];
const orderItems = document.querySelector('#items')
const orderTitle = document.querySelector('#title')
const texts = document.querySelectorAll('tr')


let generateCartItems = () => {
    if(basket.length !==0){
         return orderItems.innerHTML += basket.map((x) => {
           let {newId, items} = x
            let search = foodItems.find((y) => y.id === newId) 
            return `
            <tr>
                <td class="food-item">
                    <img src=${search.bilde} height="70px" width="70px" />
                    <h4>${search.title}</h4>
                </td>
                <td>${search.pris}</td>
                <td class="food-quantity">${items}</td>
                <td class="food-amount">150kr</td>
                <td id="trash"><img src="../Images/Icons/trash-solid.svg" height="25px" width="25px"/></td>
            <tr>   
          
            `
           

         })
         
         
    }else{
        orderItems.innerHTML = `
        Items are empty
        <br>
        <a href="./meny.html">Return home</a>
        
        `

    }
}
generateCartItems() 


