var idade = 0;
idade = prompt("Digite sua idade: ");

if (idade >= 5 && idade <= 7) {
    alert("Categoria - Infantil A");
} else if (idade >= 8 && idade <= 10) {
    alert("Categoria - Infantil B");
} else if (idade >= 11 && idade <= 13) {
    alert("Categoria - Juvenil A");
} else if (idade >= 14 && idade <= 17) {
    alert("Categoria - Juvenil B");
} else if (idade >= 18) {
    alert("Categoria - Adulto");
} else {
    alert("Categoria - Sem Categoria");
}