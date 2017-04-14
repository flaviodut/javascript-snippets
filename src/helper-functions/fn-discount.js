// Calcula a diferença percentual entre dois valores númericos ou valores monetários em reais
function appliedDiscount(fromPrice, forPrice) {
    let discount;
    
    fromPrice = fromPrice.toString().replace(/([A-Z$. ])/g,'').replace(',','.');
    forPrice = forPrice.toString().replace(/([A-Z$. ])/g,'').replace(',','.');

    if (Number(fromPrice) < Number(forPrice)) return false;

    discount = 100 - ((forPrice * 100) / fromPrice);
    discount = discount.toFixed(2).toString().replace('.00','').replace('.',',');

    return discount+'% de desconto';
}

let value = appliedDiscount('R$ 1.000,00', 'R$ 500,00');
console.log(value);


// Calcula o preço com adição de desconto

// var price = 'R$ 2.099,90';
// var discountPerc = 15;
// var discountPrice;
// var newPrice;

// price = price.replace('R$ ','').replace('.','').replace(',','.');
// price = parseFloat(price);

// discountPrice = ( price*discountPerc ) / 100;
// newPrice = price-discountPrice;

// price = price.toFixed(2).toString().replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// newPrice = newPrice.toFixed(2).toString().replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// console.log('R$ ' + price);
// console.log('R$ ' + newPrice );