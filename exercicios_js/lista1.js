//1)Criar uma varavel chamada ano
var ano;

//2)Escreva uma função chamada diferenca que retorne a diferença de dois números//
function diferenca(a, b) {
    return a - b
}

//3)Escreva uma função que retorne o quadrado de um número,retorna a potência de a por b?
function quadrado(a) {
    return a ** 2
}

//4)Escreva uma função que retorne a raiz quadrada de um número.
function raiz(a) {
    return a ** 0.5
}

//5) Escreva uma expressão comparando se 3 é maior que 5 e diga qual é o resultado retornado
3 > 5
false
console.log(3 > 5)

//6)Atribua à variável menorIgual o resultado da comparação se -1 é menor ou igual a -5.
menorIgual = -1 <= -5

//7)Escreva uma expressão que compare se o conteúdo da variável entrada é igual ao da variável esperado, desconsiderando o tipo.
entrada === esperado

//8)Escreva uma expressão que compare se o número 2 é igual à string "2", considerando o tipo, e diga qual é o resultado retornado.
2 === '2';

//9)Escreva uma expressão que compare se o booleano true é diferente da string "true", considerando o tipo, e diga qual é o resultado retornado.
true !== 'true'

//10)Atribua à variável vaiChover o resultado da operação lógica OU entre as variáveis temNuvemNoCeu e laveiCarro.
vaiChover = temNuvemNoCeu || laveiCarro

//11)Escreva uma expressão que realize a operação lógica E entre as variáveis fome e sono.
Fome && sono

//12)Escreva uma função que, dada uma lista de numeros inteiros, retorne o maior número
function buscaMaior(array) {
    var maior = array[0];
    for (var posicao = 0; posicao < array.length; posicao++) {
        if (array[posicao] > maior) {
            maior = array[posicao];
        } else {
        } console.log('Vou retornar maior com o valor ' + maior)
        return maior;
    }
}
buscaMaior([659, 32, 58, 452, 987, 25, 12, 47])


//13)Escreva uma função que, dada uma lista de numeros inteiros, retorne a soma
var array = [25, 45, 78]
function somarLista(array) {
    var total = 0;
    for (var n = 0; n < array.length; n++) {
        total += array[n];
    }
    return total
}
somarLista(array)

//14) Escreva uma função que converta graus Farenheit para Celsius. Considere que (F − 32) × 5/9 = C
function ConverteC(Farenheit){
    var Celsius;
    Celsius = (Farenheit - 32)*5/9;
    return Celsius
    }
    
    ConverteC(32)
    

//15)Escreva uma função que converta graus Celsius para Farenheit. Considere que (F − 32) × 5/9 = C
function ConverteF(Celsius){
    var Farenheit;
    Farenheit = Celsius*9/5 + 32;
    return Farenheit;
     }

       ConverteF(30)

