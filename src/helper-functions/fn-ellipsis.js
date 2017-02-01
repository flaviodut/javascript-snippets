function ellipsis(input, size = 10) {
  if (input.length <= size) {
    return input;
  }
  return input.substring(0, size) + '...';
}

// Paralelepi...
console.log(ellipsis('Paralelepipedo'));