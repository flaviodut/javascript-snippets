(function () {

  const kitten = document.querySelector('#kitten');

  const kittenInfo = {
    top: null,
    height: null,
    bottom() {
      return this.height + this.top;
    },
  };

  function onLoadKitten() {
    kittenInfo.height = kitten.height;
    kittenInfo.top = kitten.offsetTop;

    // console.info(kittenInfo.top, kittenInfo.height, kittenInfo.bottom());
  }

  function onScroll() {
    const windowInnerHeight = this.innerHeight;
    const windowScrollY = this.scrollY;

    // TODO: verificar quando a imagem saí da view
    const visibleOnTop = kittenInfo.top < windowInnerHeight + windowScrollY;
    const visibleOnBottom = kittenInfo.bottom() < windowInnerHeight + windowScrollY;
    const visibleFull = visibleOnTop && visibleOnBottom;

    // console.log(windowInnerHeight, windowScrollY);
    console.info(visibleFull, visibleOnBottom, visibleFull);

    if (visibleFull) {
      console.log('full');
    } else {
      if (visibleOnTop) {
        console.log('top');
      }

      if (visibleOnBottom) {
        console.log('bottom');
      }
    }
  }

  window.addEventListener('scroll', () => onScroll(), false);
  kitten.addEventListener('load', () => onLoadKitten(), false);

} ());