function encriptar(){
    var texto = document.querySelector(".text-area").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".mensaje").value = textoCifrado;
    document.querySelector(".mensaje").value;
    document.querySelector(".text-area").value = "";
    document.querySelector(".mensaje").style.backgroundImage = "none";
}

var boton1 = document.querySelector(".btn-encriptar");
boton1.onclick = encriptar;

function desencriptar(){
    var textoD = document.querySelector(".text-area").value;
    var textoCifradoD = textoD.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".mensaje").value = textoCifradoD;
    document.querySelector(".mensaje").value;
    document.querySelector(".mensaje").style.backgroundImage = "none";
}

var boton2 = document.querySelector(".btn-desencriptar");
boton2.onclick = desencriptar;

function copiar(){
    /*var codigoACopiar = document.getElementById(".mensaje").value;
    navigator.clipboard.writeText(codigoACopiar.innerHTML);*/
    document.querySelector(".mensaje").value = "";
    window.alert("Texto Copiado")
}

var boton3 = document.querySelector(".btn-copiar");
boton3.onclick = copiar;
