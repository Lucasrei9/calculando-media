
// praticando JS


// quero um script que mostre o nome do aluno,
// que leia duas notas, some sua media e
// que mostre o resultado da media e mostre tambem se 
// o aluno foi aprovado ou reprovado

// mostr o nome do aluno
// nota 1 / nota 2
// media
// aprovado / reprovado


let nomes = ["Lucas", "sophia"];
let notasA = [9.5, 5.5];
let notasB = [8.5, 6.7];

function media(n1, n2){
    return (n1 + n2) / 2;
}

function passou(media) {
    if (media > 7){
        return "Aprovado(a)!";
     }
     
     else {
        return "Reprovado(a)!";
     }
}


for (let index in nomes){
    nt01 = notasA[index];
    nt02 = notasB[index];

    let m = media(nt01, nt02) 

    console.log(nomes[index], " - ", "Primeira prova",
        nt01,  " - ", "Segunda prova",
        nt02, " - ", "Media:",
        media(nt01, nt02),  " - ", passou(m))
}




