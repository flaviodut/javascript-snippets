const container = document.querySelector('#women');
const url = 'https://randomuser.me/api/?results=20&gender=female&nat=br&noinfo';

function createElement(element) {
  return document.createElement(element);
}

function appendElement(parent, element) {
  return parent.appendChild(element);
}

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    const women = data.results;

    women.map((woman) => {
      console.log(woman);

      const wrap = createElement('div');
      const photo = createElement('img');
      const name = createElement('span');
      const phone = createElement('span');
      const email = createElement('span');

      wrap.className = 'woman';

      photo.className = 'photo';
      photo.src = woman.picture.medium;

      name.className = 'name';
      name.innerHTML = `${woman.name.first} ${woman.name.last}`;

      phone.className = 'phone';
      phone.innerHTML = woman.phone;

      email.className = 'email';
      email.innerHTML = woman.email;

      appendElement(wrap, photo);
      appendElement(wrap, name);
      appendElement(wrap, phone);
      appendElement(wrap, email);
      appendElement(container, wrap);
    });
  })
  .catch((error) => {
    console.error(error);
  });