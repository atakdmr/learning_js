//? Class 01 - DOM -> Document Object Model

 let result;

 result = document.all;
 result = document.all[6];
 result = document.all.length;
 result = document.documentElement;


 result = document.head;
 result = document.body;

 result = document.body.children;

 result = document.doctype;
 result = document.URL;

 result = document.forms;
 result = document.forms[0];
 result = document.forms[0].method;

 result = document.links;
 result = document.links[0];
 result = document.links[0].id = 'hepsi';
 result = document.links[0].innerHTML = 'hepsi';
 result = document.links[0].className;

 console.log(result);

//? Class 02 - DOM -> selecting single element

// let result;

//! document.getElementById()
// result = document.getElementById('title');
// result = document.getElementById('title').id;
// result = document.getElementById('title').className;

// document.getElementById('title').style.fontSize = '36px';

// document.getElementById('title').innerText = 'alisveris listesi';
// document.getElementById('title').innerHTML = 'alisveris listesi <p>hi</p>';

//! document.querySelector()
// result = document.querySelector('#title');
// result = document.querySelector('.app-title');
// result = document.querySelector('h1');
// result = document.querySelector('input[type="submit"]');

// result = document.querySelector('li:nth-child(2)');
// result = document.querySelector('li:nth-child(2)').style.color = 'red';

// const parentElement = document.querySelector('ul');
// console.log(parentElement);

// const firstElement = parentElement.querySelector('li');
// firstElement.style.color = 'purple';

// console.log(firstElement);

//? Class 03 - DOM -> selecting multiple element

let result;

// result = document.getElementsByClassName('item');
// result = document.getElementsByClassName('item')[0];

// const items = document.getElementsByClassName('item');
// const gr_2 = document.getElementById('gr-2');
// const items = gr_2.getElementsByTagName('li');

// const items = document.querySelectorAll('li');
// const items = document.querySelectorAll('.item');
const items = document.querySelectorAll('#gr-1 .item');

// for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }

for(let item of items){
    item.style.color = 'gold';
    item.style.fontSize = '24px';
    item.innerHTML = 'item';
    // console.log(item);
}
// console.log(result);
