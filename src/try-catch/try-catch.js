(function(){
  const $btn = document.querySelector('#btn')
  const $oi = document.querySelector('#oi')

  function vaiTentando() {
    try {
      const $par = document.querySelector('#par')

      if ($par === 'undefined' || !$par) {
        throw new Error('Não existe o element.')
      }

      console.info('Deu certo')
    } catch (error) {
      setTimeout(() => {
        console.error(error.message)
        vaiTentando()
      }, 1000)
    }
  }

  $btn.onclick = function $btnClickEvent() {
    const node = document.createElement('p')
    const text = document.createTextNode('Oi! Tchau!')

    node.id = 'par'
    node.appendChild(text)
    $oi.appendChild(node)
  }

  vaiTentando()
}())
