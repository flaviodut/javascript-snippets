function createElement(element) {
  return document.createElement(element);
}

function appendChild(element, parent) {
  return document.querySelector(parent).appendChild(element);
}

// let para = createElement('p');
// para.innerHTML = "ushauishai";
// appendChild('body', para);