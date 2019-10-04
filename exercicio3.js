const PERCENTUAL_GER = 0.1;
const PERCENTUAL_ENG = 0.2;
const PERCENTUAL_TEC = 0.3;
const PERCENTUAL_OUTROS = 0.4;

var salario = 0;
var cargo;
var salarioNovo;
var diferença;
var salarioFormatado;
var salarioNovoFormatado;
var diferençaFormatado;

cargo = prompt("Digite o código de acordo com o seu cargo: \n101: Gerente \n102: Engenheiro \n103: Técnico \n104: outro");

switch (cargo) {
    case "101":
        salario = prompt("Qual o seu salário? ");
        diferença = PERCENTUAL_GER * Number(salario);
        calculaSalario();
        break;
    case "102":
        salario = prompt("Qual o seu salário? ");
        diferença = PERCENTUAL_ENG * Number(salario);
        calculaSalario();
        break;
    case "103":
        salario = prompt("Qual o seu salário? ");
        diferença = PERCENTUAL_TEC * Number(salario);
        calculaSalario();
        break;
    case "104":
        salario = prompt("Qual o seu salário? ");
        diferença = PERCENTUAL_OUTROS * Number(salario);
        calculaSalario();
        break;
    default:
        alert("Código Inválido");
}

function calculaSalario(){
    salarioNovo = Number(salario) + diferença;
    salarioFormatado = Number(salario).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
    salarioNovoFormatado = salarioNovo.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}); 
    diferençaFormatado = diferença.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});

    alert("Salário Antigo: " + salarioFormatado + "\nSalário Novo: " + salarioNovoFormatado + "\nDiferença: " + diferençaFormatado);
}

