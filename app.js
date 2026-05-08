

let frases = ["Que eu dia seja repleto de coisas boas!", "Aproveite cada momento conosco!", "O que é plantado com amor floresce no seu devido tempo!"];



let frasesCopiada = [...frases];

function geradorMensagem() {


    if (frases.length == 0) {
        frases = [...frasesCopiada]
    }
    let indiceGerado = Math.floor(Math.random() * (frases.length));
    let fraseGerada = frases[indiceGerado]
    document.querySelector("#saida").textContent = fraseGerada;
    frases.splice(indiceGerado, 1)

    console.log(fraseGerada)
}



