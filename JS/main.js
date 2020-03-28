function botaoH(){ ////////////////////////////////////// exemplo 1
    //lincar ao p 
    //innerHTML pode colocar qualquer coisa de HTML
    document.getElementById("fraseH").innerHTML = "<b>É Horista</b>";
    //console.log(document.getElementById("fraseH"));

    //alert("Você é horista");   
}
function botaoM(){ // redirecionamento para outra página
    window.open("https://digitalinnovation.one/ ")
    //document.getElementById("fraseM").innerHTML="É Mensalista";
    //console.log(document.getElementById("fraseM"));

    //alert("Você é mensalista");
}

function clicou(){ ///////////////////////////////////// exemplo 2
    // funcão cliclou faz abrir o texto
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}
    //função redirecionar faz abrir a página
function Redirecionar(){
    window.open("https://parquetecsorocaba.com.br/");
    // os dois vão abrir o link, o de cima em outra página e o de baixo na mesma
    //window.location.href = "https://parquetecsorocaba.com.br/";
}


//EXEMPLO 3
function trocar(){
    //MUDA A FRASE
    document.getElementById("mouseMove").innerHTML = "Roubei sua frase";
    //MOSTRA O ALERTA
    //alert("trocar-texto");
}

//colcando a função voltar e o ONMOUSEOUT, troca a frase apenas quando
// o mouse está em cima
function voltar(){

    document.getElementById("mouseMove").innerHTML = "Passe o mouse";
}

//exemplo 4 - anterior com THIS
function trocarUm(elemento){
    elemento.innerHTML = "Trocoooou";
}

function voltarUm (elemento){
    elemento.innerHTML = "Voltooooou";
}


function load(){
    alert("página carregada");
}

//EXEMPLO 5
// o onchange pega o valor do value
function funcaoChange(elemento){
    console.log(elemento.value); //pra pegar o valor do elemento
}





/*var nome = "Lys Fernanda";
var idade = 19;
var num = 30;
var frase = "Japão é o melhor time do mundo";
//alert("A PERFEIÇÃO SOU EU " + nome + " " + idade);

//alert(nome + idade + num);

console.log(nome);
console.log(idade + num);
console.log(frase);
console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase()); //ToLowerCase */

///////ARRAY//////////

//var lista = ["maca","pera","laranja"]
/*console.log(lista);
console.log(lista[1]); //pera
lista.push("uva"); //add a uva
lista.pop(); //tira o ultimo elemento
console.log(lista.length); //ver o tamanho da lista
console.log(lista.reverse); //imprime ela do ultimo para o primeiro
console.log(lista.toString); //transforma os elementos em tex to
console.log(lista.length()[0]); // imprime a primeira letra do elemento
console.log(lista.join("")); //coloca o que quer que separe elas no lugar de ;
*/

///////DICIONARIO///////////

/*var fruta [nome:"maça", cor:"vermelho"]
console.log(fruta); //mostra as informações da fruta
console.log(fruta.nome) // mostra o nome da fruta */
//var frutas = [{nome:"uva",cor:"roxa"}, {nome:"jaboticaba", cor:"roxa"}]

/////////////// if e prompt //////////////////
//var age = prompt("Qual a sua idade?"); //faz aparecer uma pergunta na tela
//e grava a resposta na variável
/*var idade = 18;
if(age > 17){
    alert("Maior de idade");
}

else{
    alert("Menor de idade");
}*/

///////////////// while //////////// 
/*var count = 0;

while (count <5){
    console.log(count);
    count = count +1; //count ==: 
};*/

/////////////for////////////

/*var aux;

for(aux = 0; aux<5;aux++){
    alert(aux);
}*/

/////////// data

//var d = new Date();

//alert(d);
//alert(d.getMonth()+1); // mounth sempre começa do zero então mes +1
//alert(d.getMinutes()); e etc


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
/*
function soma(n1,n2){
    return n1+n2;
}

//alert(soma(5,10));

function setReplace(frase,nome,nome2){
    return frase.replace(nome,nome2)
}

//alert(setReplace("Eu amo a Heejin","Heejin","Sophia"));

function validarIdade(idade){
    if(idade >= 18){
        var validar = true;
    }
    else{
        validar = false;
    }

    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validarIdade(idade));
*/
//se tem duas variaveis com o mesmo noome, uma globa e outra local
//ele separa entre local e global, se não usa a mesma nos dois  

/////////////////////////////////////////////////////////////
