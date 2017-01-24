// Flickr Photoset Photos
// Retorna as fotos dos albuns cadastrados no meu usuário Flickr
//
// API:
// https://www.flickr.com/services/api/
//
// Métodos usados:
// - getList: https://www.flickr.com/services/api/explore/flickr.photosets.getList
// - getPhotos: https://www.flickr.com/services/api/explore/flickr.photosets.getPhotos
//
// URLs da origem da foto
// https://www.flickr.com/services/api/misc.urls.html
// Sufixos de tamanho:
// s	quadrado pequeno 75x75
// q	large square 150x150
// t	miniatura, 100 no lado mais longo
// m	pequeno, 240 no lado mais longo
// n	small, 320 on longest side
// -	médio, 500 no lado mais longo
// z	Médio 640, 640 no lado mais longo
// c	médio 800, 800 no lado mais longo†
// b	grande, 1024 no lado mais longo*
// h	grande 1600, 1600 no lado mais longo†
// k	grande 2048, 2048 no lado mais longo†
// o	imagem original, jpg, gif ou png, dependendo do formato de origem

// TODO
// - Melhorias gerais no código, organização, reescrita, segmentação

(function() {
  const FLICKR_USER_ID = '74517128%40N00';
  const FLICKR_API_KEY = 'ad1eb809a754479a25f3cb8d709efcdb';

  let dataPhotosetId;

  function createElement(element) {
    if (!element) return false;
    return document.createElement(element);
  }

  function appendChild(element, parent) {
    if (!element || !parent) return false;
    return document.querySelector(parent).appendChild(element);
  }

  function appendImage(farm, server, id, secret, title, size = 't') {
    const imageElement = createElement('img');
    imageElement.setAttribute('src', `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`);
    imageElement.setAttribute('alt', title);

    const imageLink = createElement('a');
    imageLink.className = 'link';
    imageLink.setAttribute('href', `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_c.jpg`);
    imageLink.setAttribute('title', title);
    imageLink.setAttribute('target', '_blank');
    imageLink.appendChild(imageElement);

    const photosList = `#id_${dataPhotosetId} .photos-list`;

    return appendChild(imageLink, photosList);
  }

  function promiseGetList() {
    const photosetsListData = fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${FLICKR_API_KEY}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1`);

    photosetsListData
      .then(data => data.json())
      .then((data) => {
        const dataPhotoset = data.photosets.photoset;
        dataPhotoset.map((photoset) => {
          const el = createElement('div');
          el.id = `id_${photoset.id}`;
          el.className = 'album';
          el.innerHTML = `
          <p>
            <b>ID:</b> ${photoset.id}<br>
            <b>Title:</b> ${photoset.title._content}<br>
            <b>Descrição:</b> ${photoset.description._content}<br>
            <b>URL:</b> <a href=" https://www.flickr.com/photos/${FLICKR_USER_ID}/sets/${photoset.id}" target="_blank">Link álbum de fotos</a>
          </p>
          <div class="photos-list"></div>`;

          document.body.appendChild(el);

          return promiseGetPhotos(photoset.id);
        });
      })
      .catch(err => console.error(err));
  }

  function promiseGetPhotos(photosetId) {
    const dataPhotos = fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${photosetId}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1`);

    dataPhotos
      .then(data => data.json())
      .then((data) => {
        const photos = data.photoset.photo;
        dataPhotosetId = data.photoset.id;
        photos.forEach((photo) => {
          appendImage(photo.farm, photo.server, photo.id, photo.secret, photo.title, 's');
        });
      })
      .catch(err => console.error(err));
  }

  promiseGetList();
}());

