// ? selecting elements in the document

// *1. By element  --> getElementsByTagName()
// *2. by id  --> getElementById()
// *3 querySelector()


// const p = document.getElementsByTagName("p");
// console.log(p);




// * diffferent selectors 
// ! 1. universal selector
// const p = document.querySelector('*');

// ! 2. type selector (element name)
// const p = document.querySelector('h1');
// console.log(p);

// ! 3. class selector
// const p = document.querySelectorAll('.message');
// console.log(p);
// only first element

// const p = document.querySelectorAll('.message');

// ! 4. id selector
// const p = document.querySelector('#message');  






{/* <div>
  <p>CreateElement example</p>
</div> */}

//  * create element 

// ? create a new element 'div'
// let div = document.createElement('div');

// // ?adding an HTML snippet to the 'div' 
// div.innerHTML = '<p>CreateElement example</p>';

// // ?attach the div to the document, you use the appendChild() method:
// document.body.appendChild(div);
// console.log(div);

// ? adding a id to div, 
// div.id="basic"
// console.log(div);

// ? adding a class to div,
// div.class="createdClass"
// console.log(div);







//  ? textContent
// let note = document.getElementById('note');
// console.log(note.innerHTML);




// ! setting inline styles
let p = document.querySelector('#content');
p.style.color = 'red';
p.style.fontWeight = 'bold';
