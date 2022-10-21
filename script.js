// esconder incremento
function hideinc(){
    var incr = document.getElementById('increment')

    if(document.getElementById("cCifra2").checked){
        incr.style.display = 'inline'
    }else if(document.getElementById("cCifra1").checked){
        incr.style.display = 'none'
    }
}


// Base64 functions

function base64C(){
    let Resultado = document.getElementById('cResult');
    let digitado = document.getElementById('cWrite').value;
    if(document.getElementById('cCifra1').checked){
        Resultado.textContent = btoa(digitado)
    }
}

function base64D(){
     let Resultado = document.getElementById('cResult');
     let digitado = document.getElementById('cWrite').value;
     if(document.getElementById('cCifra1').checked){
        Resultado.textContent = atob(digitado)
    }
}


// cifra de cesar functions


function cesarC(){
const digitado = document.getElementById('cWrite')
const incremento = document.getElementById('cNumber')
const resultado = document.getElementById('cResult')
const marcar = document.getElementById('cCifra2')
if(marcar.checked){

    var frase = "";
    var alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var frase = digitado.value.toLowerCase();
    var off = incremento.value;
    var x = parseInt(off);
    var keep = [];

    for (var i = 0; i < frase.length; i++){
        if(frase[i] != ' '){
            for(var j = 0; j < alfa.length; j++){
                if (frase[i] == alfa[j]){
                      keep[i] = alfa[(j + x) % alfa.length];
                            break;
     }
   }
 }else {
     keep[i] = ' ';
 }
}
resultado.textContent = keep.join("")
}
}
function cesarD(){
    
const digitado = document.getElementById('cWrite')
const incremento = document.getElementById('cNumber')
const resultado = document.getElementById('cResult')
const marcar = document.getElementById('cCifra2')
if(marcar.checked){

    var frase = "";
    var alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var frase = digitado.value.toLowerCase();
    var off = incremento.value;
    var x = parseInt(off);
    var keep = [];

    for (var i = 0; i < frase.length; i++){
        if(frase[i] != ' '){
            for(var j = 0; j < alfa.length; j++){
                if (frase[i] == alfa[j]){
                      keep[i] = alfa[(j - x) % alfa.length];
                            break;
     }
   }
 }else {
     keep[i] = ' ';
 }
}
resultado.textContent = keep.join("")
}
}