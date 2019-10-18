function removeAccents(string) {
  const accents    = 'ÀÁÂÃÄÅĄàáâãäåąßÒÓÔÕÕÖØÓòóôõöøóÈÉÊËĘèéêëęðÇĆçćÐÌÍÎÏìíîïÙÚÛÜùúûüÑŃñńŠŚšśŸÿýŽŻŹžżź';
  const accentsOut = 'AAAAAAAaaaaaaaBOOOOOOOOoooooooEEEEEeeeeeeCCccDIIIIiiiiUUUUuuuuNNnnSSssYyyZZZzzz';
  return string
    .split('')
    .map((letter, index) => {
    	const accentIndex = accents.indexOf(letter);
    	return accentIndex !== -1 ? accentsOut[accentIndex] : letter;
  	})
    .join('');
}

function transformToArrayOfCharacters(string) {
	const str = removeAccents(string);
	return str.toLowerCase().replace(/ /gi, '').split('');
}

function encripty(key, message) {
  key = key.toLowerCase().replace(/ /gi, '').split('');
  message = message.toLowerCase().replace(/ /gi, '').split('');

  const cipher = [];

  // Determina o número de posições que cada coluna deverá ter
  // TODO: verificar
  const patchPosition = parseInt(message.length / key.length) + message.length % key.length;

  // Caracteres que serão usados randomicamente para completar as colunas
  const patchCharacters = ['k', 'w', 'y'];

  // Distribui as letras da chave em cada posição do array e criando um novo array
	key.forEach(letter => {
    cipher.push(new Array(letter));
  });

  // Distribui a mensagem pelas colunas
  message.forEach((letter, index) => {
    cipher[index % key.length].push(message[index]);
  });

  // Se necessário, completa posições vazias de cada coluna com caracteres especiais
  // Transforma os arrays internos em string
  // TODO: verificar
  cipher.forEach((array, index) => {
    if (array[patchPosition] === undefined) {
    	array.push(patchCharacters[parseInt(Math.random() * 3)]);
    }

  	cipher[index] = array.join('');
  });

  // Coloca em ordem alfabética o array e aglutina em string
  return cipher.sort().join('');
}

function decripty(key, cipher) {
	key = key.toLowerCase().replace(/ /gi, '').split('');
  cipher = cipher.toLowerCase().replace(/ /gi, '').split('');

  let message = [];
  let messageReordered = [];

  // Quebrar a cifra em grupos de acordo com a palavra-chave e organizar em uma matriz
  for (let i = 0, chunk = cipher.length / key.length; i < cipher.length; i += chunk) {
    message.push(cipher.slice(i, i + chunk));
  }

  // Ordenar a matriz de acordo com a palavra-chave
  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < key.length; j++) {
      if (key[i] === message[j][0]) {
        messageReordered.push(message[j]);
      }
    }
  }

  // Remover a primeira posição de cada array da matriz referente a palavra-chave
  for (let i = 0; i < messageReordered.length; i++) {
    messageReordered[i].shift();
  }

  // Reordenar caracteres da mensagem
  message = [];
  for (let i = 0; i < messageReordered[0].length; i++) {
    for (let j = 0; j < messageReordered.length; j++) {
      message.push(messageReordered[j][i]);
    }
  }

	return message.toString().replace(/,/gi, '');
}

// const key = 'chave';
// const message = '1234567890';
const key = 'varejo';
const message = 'estaeumamensagemparaminh';

const c = encripty(key, message);
console.log('encripty: ', c);

const m = decripty(key, c);
console.log('decripty: ', m);
