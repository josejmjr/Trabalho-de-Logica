var valor;
var qntdNota100;
var qntdNota50;
var qntdNota10;
var qntdNota5;
var qntdNota1;


valor = prompt("Digite o Valor desejado");
var valorDesejado = Number(valor);
var valorDesejadoFormatado = valorDesejado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
var valorRestante = Number(valor);

qntdNota100 = (valorRestante / 100);
valorRestante = valorRestante % 100;

qntdNota50 = (valorRestante / 50);
valorRestante = valorRestante % 50;

qntdNota10 = (valorRestante / 10);
valorRestante = valorRestante % 10;

qntdNota5 = (valorRestante / 5);
valorRestante = valorRestante % 5;

qntdNota1 = Number(valorRestante);


alert("Valor desejado: " + valorDesejadoFormatado + "\nNotas de 100: " + parseInt(qntdNota100) +
    "\nNotas de 50: " + parseInt(qntdNota50) + "\nNotas de 10: " + parseInt(qntdNota10) + "\nNotas de 5: " +
    parseInt(qntdNota5) + "\nNotas de 1: " + parseInt(qntdNota1));