const numVal = document.querySelector('#num');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

function generateNumbers(x) {
  const fibonacci = [null, 1, 1];

  for (let i = 3; i <= x; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  fibonacci.shift();

  return fibonacci;
}

function printNumbers(x) {
  let y = generateNumbers(x);

  result.innerHTML = '';

  for (let i = 0; i < y.length; i++) {
    let text = document.createTextNode(`(${i + 1}) ${y[i]}`);
    let node = document.createElement('p');

    node.className = 'f-value';
    node.appendChild(text);

    result.appendChild(node);
  }
}

btn.addEventListener('click', () => printNumbers(numVal.value), false);
