
const display = document.getElementById('display');

let arryCart = JSON.parse(localStorage.getItem('cartItems')) || [];

display.innerHTML = '';
let total = 0;

arryCart.forEach((item, index) => {
    
    const div = document.createElement('div')
    div.id = 'divID'
    
    div.innerHTML = `<div id="imageDiv">${item.image}</div>
           <div id="priceDiv"><div>Price: $${item.price}</div><button id="removeBtn">x</button></div></div>
           <div id="desDiv">${item.description} 
           
           
   `
   console.log(index)

    const removeBtn = div.querySelector('#removeBtn');
    removeBtn.addEventListener('click', () => {
        arryCart.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(arryCart));
        location.reload();
    });


    
    display.prepend(div)

    total = total + '+' + item.price  
    console.log(total)
    let totalSum = Math.round(eval(total) * 10) / 10

    const dis = document.getElementById('dis');
    dis.innerHTML = `Total price: $${totalSum}`


    
});
