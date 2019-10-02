const VALOR_PAO = 0.12;
const VALOR_BROA = 1.50;
const PERCENT_POUP = 0.1;

var qntdPaes = 0;
var qntdBroas = 0;
var valorTotalPaes = 0;
var valorTotalBroas = 0;
var valorTotalVendas = 0;
var valorPoupanca = 0;

var valorTotalPaesFormatado;
var valorTotalBroasFormatado;
var valorTotalVendasFormatado;
var valorPoupancaFormatado;

qntdPaes = prompt("Quantidade de Pães Vendidos: ");
qntdBroas = prompt("Quantidade de Broas Vendidas: ");

valorTotalPaes = Number(qntdPaes) * VALOR_PAO;
valorTotalBroas = Number(qntdBroas) * VALOR_BROA;
valorTotalVendas = valorTotalPaes + valorTotalBroas;
valorPoupanca = valorTotalVendas * PERCENT_POUP;

valorTotalPaesFormatado =  valorTotalPaes.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
valorTotalBroasFormatado = valorTotalBroas.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
valorTotalVendasFormatado = valorTotalVendas.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
valorPoupancaFormatado = valorPoupanca.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});

alert("Valor Total de Pães Vendidos: " + valorTotalPaesFormatado +  "\nValor Total de Broas Vendidos: " + 
valorTotalBroasFormatado + "\nValor Total de Vendas : " + valorTotalVendasFormatado + "\nValor Para se Guardar na Poupança: " +
 valorPoupancaFormatado);