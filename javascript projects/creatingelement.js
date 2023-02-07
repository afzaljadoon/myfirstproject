
// // create Element
// const li = document.createElement('li');

// // Add class
// li.className = 'collecton-item';

// // Add id
// li.id = 'superb-item,';

// // set attribute
// li.setAttribute('title', 'New item');

// // create text node and append
// li.appendChild(document.createTextNode('Hello world'));

// // // append child of li
// // li.querySelector('navbar').appendChild('li');

// console.log(li);

// Replace element
// create element

// const newHeading = document.createElement('h2');

// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task Edit'));
// // // Getting old Headings
// const oldHeading = document.getElementById('task-title');
// // // parent
// const card = document.querySelector('.card');
// // // Replace
// card.replaceChild(newHeading, oldHeading);

// console.log(newHeading);


// Remove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[1]);

// attr & classes
// const firstli = document.querySelector('li:first-child');
// const link = firstli.children[0];

// CLASSES
// val = link.className;
// val = link.classList;
// // val = link.getAttribute('href');
// link.classList.add('test');
// val = link;

// // ATTRIBUTES
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// val = link.hasAttribute('href');
// link.setAttribute('title','google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;


// console.log(val);

// document.querySelector('.btn').addEventListener('click', function(e){
//     console.log('Hello World');

//     e.preventDefault(); 
// });

// document.querySelector('.btn').addEventListener('click', onClick);

// function onClick(e){
//     // 
    
//     let val;
     
//     val = e;

    // EVENT TARGET ELEMENT
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     e.target.innerText = 'Hello';

//     // TIMESTAMP
//    val = e.timeStamp;

// //    EVENT TYPE
//  val = e.type;

// //  COORDNS EVENT RELATIVE TO THE WINDOW
//  val = e.clientY;
//  val = e.clientX;

//  //  COORDNS EVENT RELATIVE TO THE ELEMENT
//  val = e.offsetY;
//  val = e.clientX;
    
//     console.log(val);
    
// }
// const callbtn = document.querySelector('.Right');
// const cont = document.querySelector('.container');
// const heading = document.querySelector('h5');

// CLICK
// callbtn.addEventListener('click',runEvent);

// // DOUBLE CLICK
// callbtn.addEventListener('dblclick', runEvent);
// MOUSEDOWN
// callbtn.addEventListener('mousedown', runEvent);
// MOUSEUP
// callbtn.addEventListener('mouseup', runEvent);
// MOUSENTER
// cont.addEventListener('mouseenter', runEvent);
// // MOUSELEAVE
// cont.addEventListener('mouseleave', runEvent);
// // MOUSEOVER
// cont.addEventListener('mouseover', runEvent);
// // MOUSEOUT
// cont.addEventListener('mouseout', runEvent);
// MOUSEMOVE
// cont.addEventListener('mousemove', runEvent);

// // EVENT HANDLER
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent= `MouseX: ${e.offsetX},MouseY: ${e.offsetY}`; 

//     document.body.style.backgroundColor= `rgb(${e.offsetX},${e.offsetY},40)`;
// }
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h2');
// const select = document.querySelector('select');
// // clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);
// keydown
// taskInput.addEventListener('keydown', runEvent);
// keyup
// taskInput.addEventListener('keyup', runEvent);

// keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// PASTE
// taskInput.addEventListener('paste', runEvent);
// Change
// select.addEventListener('change',runEvent);


// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);

    // heading.innerText =e.target.value;

    //  console.log(e.target.value);
    // get input
    // console.log(taskInput.value);

    // e.preventDefault();
// }
//   EVENT BUBBLING
// document.querySelector('.btn').addEventListener('click', function(){
//     console.log('.btn');
// });

// // document.querySelector('.btn1').addEventListener('click', function(){
// //     console.log('.btn1');
// // });
     
// document.querySelector('.red').addEventListener('click', function(){
//     console.log('.red');
// });

// document.querySelector('.white').addEventListener('click', function(){
//     console.log('.white');
// });

// document.querySelector('.Right').addEventListener('click', function(){
//     console.log('.Right');
// });

//EVENT DELEGATION
// document.body.addEventListener('click', callus);

// function callus(e){
//      if(e.target.className=== 'btn'){
//          console.log('call us');
//      }
// }

// document.body.addEventListener('click', callus);

// function callus(e){
//      if(e.target.className=== 'Hm'){
//          console.log('call us');
//      }
// }
    //   Set local storage item
    // localStorage.setItem('name', 'john');
    // localStorage.setItem('age', '30');
     
     //   Set session storage item
    //  sessionStorage.setItem('name', 'cutting');

    //  Remove from local storage
    // localStorage.removeItem('name');
    
    // Get from local storage
    // const name = localStorage.getItem('name');
    // const age = localStorage.getItem('age');

    // // clear local storage
    //   localStorage.clear();

    // console.log(name, age);
    
      document.querySelector('form').addEventListener('submit', function(e){
         const task = document.getElementById('task').value;
         
         localStorage.setItem('task',task);
         alert('Task saved');
         
         let tasks;
         if(localStorage.getItem('tasks')===null){
             tasks = [];
         }else{
              tasks = JSON.parse(localStorage.getItem('tasks'));
         }
         tasks.push(task);
         localStorage.setItem('tasks', JSON.stringify(tasks));
         e.preventDefault();
      });

      const tasks = JSON.parse(localStorage.getItem('tasks'));

      tasks.forEach(function(task) {
          console.log(task);
      });



