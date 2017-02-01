// What I need: When clicked show the text inside each <li>

// Applying event to each <li>
const listItens = document.querySelectorAll('.list-item');

Array.from(listItens).forEach(function(e) {
  e.addEventListener('click', function() {
    console.log(e.innerHTML);
  }, false);
});

// Using event delegation, I can select each '.list-item' from '#list'
const list = document.querySelector('#list');

list.addEventListener('click', function(e) {
  // i can access children elements using the target property
  console.log(e.target.innerHTML);
}, false);