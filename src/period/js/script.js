//new Date(year, month, day, hours, minutes, seconds, milliseconds)

function period(init,end){

	// Define as datas
	var dateInit = new Date(init[0],init[1]-1,init[2]); // inicial
	var dateEnd = new Date(end[0],end[1]-1,end[2]); // final
	var dateToday = new Date(); // hoje

	// Exibe as datas inicial e final só pra informar
	$('.date .init').text(dateInit);
	$('.date .end').text(dateEnd);

	// Transforma o valor em ms pra facilitar no calculo
	dateInit = dateInit.getTime();
	dateEnd = dateEnd.getTime();
	dateToday = dateToday.getTime();

	if ( dateToday > dateInit && dateToday < dateEnd ){ // se hj for antes q a data final
	    var periodTotal = dateEnd - dateInit;
	    var periodPos = dateEnd - dateToday;
	    var result = 100 - ( ( periodPos * 100 ) / periodTotal );
	    $('.bar').css('width',result+'%');
	    $('.perc').text(result.toFixed(1)+'%');
	} else if ( dateToday > dateEnd ) { // se já passou
		$('.progress').addClass('complete');
		$('.perc').text('100%');
	} else if ( dateToday < dateInit ) { // se ainda nao começou
		$('.progress').addClass('waiting');
		$('.perc').text('0%');
	}

}

$(function (){

	// Configuracoes
	var periodInit = ['2014','1','1']; // data inicial
	var periodEnd = ['2014','1','31']; // data final
	var periodMs = 60*1000; // tempo q atualiza em ms // 1 min

	period(periodInit,periodEnd);
	setInterval(function(){ period(periodInit,periodEnd); },periodMs);

	console.log(periodInit,periodEnd);

});