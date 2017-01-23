// Flickr Photoset Photos
// Retorna as fotos dos albuns cadastrados no meu usuário Flickr
// API: https://www.flickr.com/services/api/explore/flickr.photosets.getPhotos

// SPM
// https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=da9853f15a38af0dcde0b2618f1d92d6&photoset_id=72157623221294122&user_id=74517128%40N00&format=json&nojsoncallback=1&auth_token=72157675788966284-ec111c47e897c982&api_sig=ae9f48706826d62f9345926749f736ce

// Jurere
// https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=da9853f15a38af0dcde0b2618f1d92d6&photoset_id=72157623221063940&user_id=74517128%40N00&format=json&nojsoncallback=1&auth_token=72157675788966284-ec111c47e897c982&api_sig=947ba40861f20e35ca47fc50f790e939

(function() {
  const FLICKR_USER_ID = '74517128%40N00';
  const FLICKR_API_KEY = 'da9853f15a38af0dcde0b2618f1d92d6';

  const FLICKR_PHOTOSET_DATA = fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${FLICKR_API_KEY}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1`);

  // const template =
  // `<p><b>ID:</b> ${photoset.id}<br>
  // <b>Title:</b> ${photoset.title._content}<br>
  // <b>Descrição:</b> ${photoset.description._content}<br>
  // <b>URL:</b> <a href=" https://www.flickr.com/photos/${FLICKR_USER_ID}/sets/${photoset.id}" target="_blank">Link álbum de fotos</a></p>
  // <ul class="photos-list"></ul>`;

  FLICKR_PHOTOSET_DATA
    .then(data => data.json())
    .then(data => {
      console.info(data);
      data.photosets.photoset.map(photoset => {
        console.log(photoset.id);

        const FLICKR_PHOTOSETPHOTOS_DATA = fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${photoset.id}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1&auth_token=72157675788966284-ec111c47e897c982`);

        FLICKR_PHOTOSETPHOTOS_DATA
          .then(data => data.json())
          .then(data => {
            console.log(data);
          });

        /*const el = document.createElement('div');
        el.className = 'album';
        el.innerHTML = template;
        document.body.appendChild(el);*/
      });
    });

}());

