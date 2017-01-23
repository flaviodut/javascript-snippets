var dragnndrop = (function() {
  var myX = '';
  var myY = '';
  var whichArt = '';

  function resetZ() {
    var elements = document.querySelectorAll('img');
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].style.zIndex = 5;
    }
  }

  function moveStart(e) {
    whichArt = e.target;
    myX = e.offsetX === undefined ? e.layerX : e.offsetX;
    myY = e.offsetY === undefined ? e.layerY : e.offsetY;
    resetZ();
    whichArt.style.zIndex = 10;
  }

  function moveDragOver(e) {
    e.preventDefault();
  }

  function moveDrop(e) {
    e.preventDefault();
    whichArt.style.left = e.pageX - myX + 'px';
    whichArt.style.top = e.pageY - myY + 'px';
  }

  function touchStart(e) {
    e.preventDefault();

    var whichArt = e.target;

    if (whichArt.draggable) {

      var moveOffsetX = whichArt.offsetLeft - e.touches[0].pageX;
      var moveOffsetY = whichArt.offsetTop - e.touches[0].pageY;
      resetZ();
      whichArt.style.zIndex = 10;

      whichArt.addEventListener('touchmove', function(a) {
        var positionX = a.touches[0].pageX + moveOffsetX;
        var positionY = a.touches[0].pageY + moveOffsetY;
        whichArt.style.left = positionX + 'px';
        whichArt.style.top = positionY + 'px';
      }, false);

    }
  }

  document.querySelector('body').addEventListener('dragstart', moveStart, false);
  document.querySelector('body').addEventListener('dragover', moveDragOver, false);
  document.querySelector('body').addEventListener('drop', moveDrop, false);

  document.querySelector('body').addEventListener('touchstart', touchStart, false);
})();
