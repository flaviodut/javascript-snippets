// Flickr Photoset List
// Retorna os albuns cadastrados no meu usuário Flickr
// API: https://www.flickr.com/services/api/explore/flickr.photosets.getList

(function() {

  const FLICKR_USER_ID = '74517128%40N00';
  const FLICKR_API_KEY = 'da9853f15a38af0dcde0b2618f1d92d6';

  const FLICKR_DATA = fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${FLICKR_API_KEY}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1`);

  FLICKR_DATA
    .then(data => data.json())
    .then(data => {
      data.photosets.photoset.map(photoset => {
        const el = document.createElement('div');
        const template = `<b>ID:</b> ${photoset.id}<br>
  <b>Title:</b> ${photoset.title._content}<br>
  <b>Descrição:</b> ${photoset.description._content}<br>
  <b>URL:</b> <a href=" https://www.flickr.com/photos/${FLICKR_USER_ID}/sets/${photoset.id}" target="_blank">Link álbum de fotos</a>`;

        el.className = 'album';
        el.innerHTML = template;
        document.body.appendChild(el);
      });
    });

}());

