// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let sorteo = 0;
let numeroMaximo;
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');


// function asignarTextoElemento(elemento, texto) {
//     let elementoHTML = document.querySelector(elemento);
//     elementoHTML.innerHTML = texto;
//     return;
// }
function agregarAmigo (){
    let amigo = document.getElementById('amigo').value;

    if (amigo == ''){
        window.alert("Por favor, inserte un nombre.");
    }
    else {
        amigos.push(amigo);
        limpiarCaja();
        listarAmigos();
    }
    return;
}

function listarAmigos(){
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo(){
    numeroMaximo = amigos.length;
    console.log(numeroMaximo);
    let sorteado =  Math.floor(Math.random()*numeroMaximo)+1;

    if (amigos.length==0){
        window.alert("Aún no hay amigos agregados para sortear.");
    }else{
        // resultado.innerHTML = "";
        const li = document.createElement("li");
        li.textContent = amigos[sorteado];
        listaAmigos.appendChild(li);

        console.log('cantidad de amigos en la lista:',amigos.length);
        console.log('numero sorteado:',sorteado);
    }
    
    
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}