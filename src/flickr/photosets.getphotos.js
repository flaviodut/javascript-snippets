// Flickr Photoset Photos
// Retorna as fotos dos albuns cadastrados no meu usuário Flickr
//
// API:
// https://www.flickr.com/services/api/
//
// Métodos usados:
// - getList: https://www.flickr.com/services/api/explore/flickr.photosets.getList
// - getPhotos: https://www.flickr.com/services/api/explore/flickr.photosets.getPhotos

(function() {
  const FLICKR_USER_ID = '74517128%40N00';
  const FLICKR_API_KEY = 'ad1eb809a754479a25f3cb8d709efcdb';

  let photosetId;

  function createElement(element) {
    return document.createElement(element);
  }

  function appendChild(element, parent) {
    return document.querySelector(parent).appendChild(element);
  }

  function appendImage(farm, server, id, secret, title, size = 't') {
    const imageElement = createElement('img');
    imageElement.setAttribute('src', `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`);
    imageElement.setAttribute('title', title);

    const photosList = `#id_${photosetId} .photos-list`;

    return appendChild(imageElement, photosList);
  }

  const FLICKR_PHOTOSET_DATA = fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${FLICKR_API_KEY}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1`);

  FLICKR_PHOTOSET_DATA
    .then(data => data.json())
    .then((data) => {
      data.photosets.photoset.map(photoset => {
        const el = document.createElement('div');
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

        const FLICKR_PHOTOSETPHOTOS_DATA = fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${photoset.id}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1`);

        FLICKR_PHOTOSETPHOTOS_DATA
          .then(data => data.json())
          .then(data => {
            const photos = data.photoset.photo;
            photosetId = data.photoset.id;
            photos.forEach(photo => {
              appendImage(photo.farm, photo.server, photo.id, photo.secret, photo.title, 's');
            });
          });
      });
    });
}());

