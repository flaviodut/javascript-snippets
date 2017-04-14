// Calcula o valor do desconto aplicado

var fromPrice = 'R$ 2.999,90';
var forPrice = 'R$ 1.999,90';
var discount;

fromPrice = fromPrice.replace('R$ ','').replace('.','').replace(',','.');
forPrice = forPrice.replace('R$ ','').replace('.','').replace(',','.');

fromPrice = parseFloat(fromPrice);
forPrice =  parseFloat(forPrice);
discount = (forPrice*100)/fromPrice;

fromPrice = fromPrice.toFixed(2).toString().replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
forPrice = forPrice.toFixed(2).toString().replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
discount = discount.toFixed(2).toString().replace('.',',');

console.log('de: R$ '+fromPrice);
console.log('por: R$ '+forPrice);
console.log(discount+'%');



// Calcula o preço com adição de desconto

var price = 'R$ 2.099,90';
var discountPerc = 15;
var discountPrice;
var newPrice;

price = price.replace('R$ ','').replace('.','').replace(',','.');
price = parseFloat(price);

discountPrice = ( price*discountPerc ) / 100;
newPrice = price-discountPrice;

price = price.toFixed(2).toString().replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
newPrice = newPrice.toFixed(2).toString().replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");

console.log('R$ ' + price);
console.log('R$ ' + newPrice );