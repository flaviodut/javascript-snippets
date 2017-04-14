// contador
function atualizaContador(YY,MM,DD,HH,MI,local) {
  var SS = 00;
  var hoje = new Date();
  var futuro = new Date(YY,MM-1,DD,HH,MI,SS);

  var ss = parseInt((futuro - hoje) / 1000);
  
  var mm = parseInt(ss / 60);
  var hh = parseInt(mm / 60);
  var dd = parseInt(hh / 24);

  ss = ss - (mm * 60);
  mm = mm - (hh * 60);
  hh = hh - (dd * 24);
  
  var resultDay = dd;
  var resultHour = (toString(hh).length) ? hh : '';
  var resultMin =  ((mm<10) ? "0" : "") + mm;
  var resultSeg = ((ss<10) ? "0" : "") + ss;

  if (dd+hh+mm+ss > 0) {
    $('.date.day').html(resultDay);
    $('.date.hour').html(resultHour);
    $('.date.min').html(resultMin);
    $('.date.seg').html(resultSeg);
    setTimeout(function(){atualizaContador(YY,MM,DD,HH,MI,local)},1000);
  } else {
    $('.date.day').html('00');
    $('.date.hour').html('00');
    $('.date.min').html('00');
    $('.date.seg').html('00');
    setTimeout(function(){atualizaContador(YY,MM,DD,HH,MI,local)},1000);
  }
}

// init contador
var t =  atualizaContador('2014','12','15','00','00'); // ano / mes / dia / hora / minutos / id ou class