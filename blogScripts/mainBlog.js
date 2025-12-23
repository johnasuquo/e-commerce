import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

import { 
    getDatabase,
    ref,
    push, 
    onValue, 
    remove,
    query,
    limitToLast
 } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const display = document.getElementById('display');
const cartText = document.getElementById('cartText');
const countDiv = document.getElementById('countDiv');

const overlay = document.getElementById('overlay');
const cartIma = document.getElementById('cartIma');



const dataSettings = {
    databaseURL: "https://shoppingstoredb-default-rtdb.europe-west1.firebasedatabase.app/",
}

const app = initializeApp(dataSettings);
const database = getDatabase(app);
const myDatabase = ref(database, 'myDataInDB')

let countNumber = 0;

const dashbordContent = [
{
    image: "<img src='photos/good1.jpg'/>",
    price: 4.9,
    rating: '4.2',
    description: 'White T-shirt and black floral print. Cotton blend, casual fit.',
    review: '10.2k'
    
    
},
{
    image: "<img src='photos/good2.jpg'/>",
    price: 11.49,
    rating: '4.7',
    description: "Beige pullover hoodie for girls. Soft fleece with front pocket.",
    review: '23.6k'
},
{
    image: "<img src='photos/good3.jpg'/>",
    price: 41.49,
    rating: '4.8',
    description: 'Lightgreen button-up shirt. Relaxed fit, breathable fabric.',
    review: '21.9k'
},
{
    image: "<img src='photos/good4.jpg'/>",
    price: 49.9,
    rating: '4.4',
    description: 'Black and white plateform sneakers. Unisex stlye rubber sole.',
    review: '38.2k'
},
{
    image: "<img src='photos/good5.jpg'/>",
    price: 42.9,
    rating: '4.6',
    description: 'White & black sport sneakers. Caushioned sole, casual wear.',
    review: '9.13k'
},
{
    image: "<img src='photos/good6.jpg'/>",
    price: 7.49,
    rating: '3.8',
    description: 'Dark navy graphic tee. 100% cotton, crew neck.',
    review: '847'
},
{
    image: "<img src='photos/good7.jpg'/>",
    price: 14.0,
    rating: '4.7',
    description: 'Teal pullover hoodie with logo. Warm fleece interior.',
    review: '1.16k'

},
{
    image: "<img src='photos/good8.jpg'/>",
    price: 499.9,
    rating: '4.5',
    description: 'Fitness smartwatch with heart rate monitor. Blue band.',
    review: '14.0k'
},
{
    image: "<img src='photos/good9.jpg'/>",
    price: 637,
    rating: '4.8',
    description: "Multi-function smartwatch. Gray silicone strap, touch screen.",
    review: '35.1k'
},
{
    image: "<img src='photos/good10.jpg'/>",
    price: 79.9,
    rating: '4.1',
    description: "Modern gray athletic shoe. Lightweight, flexible sole.",
    review: '21.7k'
},
{
    image: "<img src='photos/good11.jpg'/>",
    price: 19.9,
    rating: '4.7',
    description: "Black graphic shirt with artistic print. Short sleeve, button-up style.",
    review: '4.23k'
},
{
    image: "<img src='photos/good12.jpg'/>",
    price: 114.9,
    rating: '5.0',
    description: "White 'NEW YORK' hoodie. Cozy fleece, kangaroo pocket.",
    review: '84.7k'
},
{
    image: "<img src='photos/good13.jpg'/>",
    price: 2.49,
    rating: '3.3',
    description: "Blue striped button-down shirt. Long sleeve, classic collar.",
    review: '912'
},
{
    image: "<img src='photos/good14.jpg'/>",
    price: 4.9,
    rating: '4.3',
    description: 'Gray pullover hoodie. Soft fabric, adjustable drawstring hood.',
    review: '42.3k'
}

];

const childOverlay = document.getElementById('childOverlay');
let div = '';

dashbordContent.forEach((item) => {
    let image = item.image;
    let price = item.price;
    let description = item.description;
    let rating = item.rating;
    let ratingIcon = "<img src='photos/star.png' id='rating'/>";
    let button = "<button class='btn'>Add</button>";
    let review = item.review;

    

    div += `<div id='childDiv'>${image}
        <p id="pricePage">Price: $${price}   ${button}</p>

        <p id='desPage'>${description}</p>
        <div id='ratingPage'><div>${rating}${ratingIcon}</div>
        
        <div id='span'>${review} <n>Sold</n></div>
        </div>
    </div>`
    
    
    
})

display.innerHTML = div

const button = document.querySelectorAll('.btn');
button.forEach((btn, index) => {

    btn.addEventListener('click', () => {

        
        if (btn.innerHTML === 'Add') {
            countNumber += 1;
            btn.innerHTML = 'Added'
            cartText.innerHTML = 'Item added to cart';
            cartText.classList.add('cText');
            setTimeout(() => {
                cartText.innerHTML = '';
                cartText.classList.remove('cText')
            }, 3000)
            countDiv.innerHTML = countNumber;
            
            const selectedContent = dashbordContent[index]

            push(myDatabase, selectedContent)
          

            
        }
        else {
            btn.innerHTML = 'Add'
            if (countNumber != 0) {
                countNumber -=1
            }
            countDiv.innerHTML = countNumber
        }
        
        if(countNumber === 0){
                countDiv.innerHTML = '';
        }
    })
})


cartIma.addEventListener('click', ()=>{
    window.location.href = "cart.html";
})



cartIma.addEventListener('dblclick', ()=>{
    
})

const menuDiv = document.getElementById('menuDiv');
const menuIma = document.getElementById('menu');

menuIma.addEventListener('click', ()=>{
    if(menuDiv.style.display === 'block'){
        menuDiv.style.display = 'none';
    }
    else(
        menuDiv.style.display = 'block'
    )

})