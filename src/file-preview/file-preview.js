(function() {
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(input.files[0]);
      
      reader.addEventListener('load', function(e) {
        var previewImage = document.querySelector('#previewImage');
        previewImage.setAttribute('src', e.target.result);
      }, false);
    }
  }

  var fieldFile = document.querySelector('#fieldFile');

  fieldFile.addEventListener('change', function() {
    readURL(this);
  }, false);
}());