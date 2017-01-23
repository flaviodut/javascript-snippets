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
    const windowScrollY = this.scrollY - 20;

    // TODO: verificar quando a imagem saí da view
    const visibleTop = kittenInfo.top < windowInnerHeight + windowScrollY
                    && kittenInfo.top > windowScrollY;
    const visibleBottom = kittenInfo.bottom() < windowInnerHeight + windowScrollY
                       && kittenInfo.bottom() > windowScrollY;
    const visibleFull = visibleTop && visibleBottom;

    // console.log(windowInnerHeight, windowScrollY);
    // console.info(visibleTop, visibleBottom, visibleFull);

    if (visibleFull) {
      console.log('full');
    } else {
      if (visibleTop) {
        console.log('top');
      }

      if (visibleBottom) {
        console.log('bottom');
      }
    }
  }

  window.addEventListener('scroll', () => onScroll(), false);
  kitten.addEventListener('load', () => onLoadKitten(), false);

} ());