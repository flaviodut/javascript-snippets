// ==UserScript==
// @name         Via Varejo - Autocomplete
// @namespace    http://flaviodutra.com.br/
// @version      0.1.3
// @description  Autocompleta campos padrão do formulário de cadastro de conteúdo e adiciona algumas regras de css
// @author       Flávio Alberto Dutra
// @match        *://admin.moveisbartira.com.br/*
// @match        *://admin.extra.com.br/*
// @match        *://admin.pontofrio.com.br/*
// @match        *://admin.casasbahia.com.br/*
// @match        *://admin.barateiro.com.br/*
// @match        *://admin.lojahp.com.br/*
// @match        *://admin.lojafuji.com.br/*
// ==/UserScript==

(function() {
  console.log('Running: Autocomplete 0.1.3');
  
	const fromData = document.querySelector('#ctl00_Conteudo_tbxDataDe_txtId'),
        fromTimeHour = document.querySelector('#ctl00_Conteudo_tbxHoraDe_txtHora'),
        fromTimeMin = document.querySelector('#ctl00_Conteudo_tbxHoraDe_txtMinuto'),
        forData = document.querySelector('#ctl00_Conteudo_tbxDataAte_txtId'),
        forTimeHour = document.querySelector('#ctl00_Conteudo_tbxHoraAte_txtHora'),
        forTimeMin = document.querySelector('#ctl00_Conteudo_tbxHoraAte_txtMinuto'),
        chkActive = document.querySelector('#ctl00_Conteudo_chkFlagAtiva');
  
  function fnDate(num) {
    const date = new Date();

    let day = date.getDate(),
        month = date.getMonth() + 1,
			  year = date.getFullYear();
    
    if (month < 10) {
    	month = '0' + month;
    }
    
    if (typeof num !== 'undefined') {
    	year = year + num;
    }
    
    return day + '/' + month + '/' + year;
  }
  
  if (fromData !== null && fromData.value === '') {
  	fromData.value = fnDate();
  }
  
  if (fromTimeHour !== null && fromTimeHour.value === '') {
  	fromTimeHour.value = '00';
  }
  
  if (fromTimeMin !== null && fromTimeMin.value === '') {
  	fromTimeMin.value = '00';
  }
  
  if (forData !== null && forData.value === '') {
  	forData.value = fnDate(10);
  }
  
  if (forTimeHour !== null && forTimeHour.value === '') {
  	forTimeHour.value = '23';
  }
  
  if (forTimeMin !== null && forTimeMin.value === '') {
  	forTimeMin.value = '59';
  }
  
  if (chkActive !== null && chkActive.checked === false) {
  	chkActive.checked = true;
  }
  
  function addCss(cssString) {
    var body = document.querySelector('body');
    var newCss = document.createElement('style');
    
    newCss.type = "text/css";
    newCss.innerHTML = cssString;
    
    body.appendChild(newCss);
  }
  
  addCss (`
		textarea { width: 98%; min-height: 500px; }
  `);
}())