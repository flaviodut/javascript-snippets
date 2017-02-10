const message = "flavioalbertodutra"; // d133a76850bcc84c2f8cd0ca6b9b4d2b
const mdfive = md5(message);

const element = document.createElement('p');
element.style.border = '1px solid';
element.style.padding = '10px 15px';
element.innerHTML = mdfive;
document.querySelector('#body').appendChild(element);