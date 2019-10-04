var anos = 0;
var meses = 0;
var dias = 0;
var totalDias = 0;
const DIAS_ANOS = 365.25;
const DIAS_MESES = 30.4166;

anos = prompt("Digite sua idade em quantidade de anos: ");
meses = prompt("Digite sua idade em quantidade de meses: ");
dias = prompt("Digite sua idade em quantidade de dias: ");

totalDias = (Number(anos) * DIAS_ANOS) + (Number(meses) * DIAS_MESES) + Number(dias);

alert("Você tem um total de: " + Math.round(totalDias) + " de dias vividos");
console.log("Você tem um total de: " + Math.round(totalDias) + " de dias vividos");