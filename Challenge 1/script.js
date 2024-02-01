var buttonEncrypt = document.querySelector(".btn-encrypt");
var buttonDecrypt = document.querySelector(".btn-decryption");
var guy = document.querySelector(".container-guy");
var contenedor = document.querySelector(".container-parr");
var resultado = document.querySelector(".text-result");

buttonEncrypton.onclick = encrypt;
buttonDecrypt.onclick = decrypt;

function encrypt(){
    hideBeginning();
    var textbox = gatherText()
    resultado.textContent = encryptText(textbox);
}

function decrypt(){
    hideBeginning();
    var textbox = gatherText()
    result.textContent = decryptText(textbox);
}

function gatherText(){
    var textbox = document.querySelector(".textbox")
    return textbox.value
}

function hideBeginning(){
    guy.classList.add("hide");
    container.classList.add("hide");
}

function encryptText(message){
    var text = message;
    var finalText = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText = finalText + "ai"
        }
        else if(text[i] == "e"){
            finalText = finalText + "enter"
        }
        else if(text[i] == "i"){
            finalText = finalText + "imes"
        }
        else if(text[i] == "o"){
            finalText = finalText + "ober"
        }
        else if(text[i] == "u"){
            finalText = finalText + "ufat"
        }
        else{
            finalText = finalText + text[i]
        }
    }
    return finalText;

}

function decryptText(message){
    var text = message;
    var finalText = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText = finalText + "a"
            i = i+1;
        }
        else if(text[i] == "e"){
            finalText = finalText + "e"
            i = i+4;
        }
        else if(text[i] == "i"){
            finalText = finalText + "i"
            i = i+3;
        }
        else if(text[i] == "o"){
            finalText = finalText + "o"
            i = i+3;
        }
        
        else if(text[i] == "u"){
            finalText = finalText + "u"
            i = i+3;
        }
        else{
            finalText = finalText + text[i];
        }
        
    }

    return finalText;

}

const btnCopy = document.querySelector(".btn-copy"); 
    btnCopy.addEventListener("click", copy = () => {
    var content = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(content);
    console.log("hola"); 
});