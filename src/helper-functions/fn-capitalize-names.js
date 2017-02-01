function nameCapitalize(str) {
  const nameSplitted = str.toLowerCase().split(' ');
  const nameFormated = nameSplitted.map((name) => {
    if (/(da|de|do)/.test(name)) {
      return name;
    }

    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
  });

  return nameFormated.join(' ');
}

console.log(nameCapitalize('FLÁVIO AlbertO da Fátima do dutra'));