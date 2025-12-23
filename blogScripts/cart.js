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



const dataSettings = {
    databaseURL: "https://shoppingstoredb-default-rtdb.europe-west1.firebasedatabase.app/",
}

const app = initializeApp(dataSettings);
const database = getDatabase(app);
const myDatabase = ref(database, 'myDataInDB');

const display = document.getElementById('display');

onValue(myDatabase, (snapshot)=>{
   // let divList = '';
    display.innerHTML = '';
    let total = 0;

    snapshot.forEach((item)=>{
        const value = item.val();
        const key = item.key;

        const div = document.createElement('div')
        div.id = 'divID'
        let button = `<button class='btn' data-key=${key}>x</button>`;

        div.innerHTML = `<div id="imageDiv">${value.image}</div>
               <div id="priceDiv"><div>Price: $${value.price}</div>${button}</div>
               <div id="desDiv">${value.description}</div>
       `
        
        display.prepend(div)

        document.querySelectorAll('.btn').forEach((btn) => {
            const key = btn.getAttribute('data-key')
            btn.addEventListener('click', () => {
                let content = ref(database, `myDataInDB/${key}`);
                remove(content)
            }
          )
        })
        
        total = total + '+' + value.price
        let totalSum = Math.round(eval(total) * 10) / 10

        const dis = document.getElementById('dis');
        dis.innerHTML = `Total price: $${totalSum}`

       // dis.innerHTML = Math.round(eval(dis.innerHTML + '+' + value.price ) * 10 )/ 10
})
})

