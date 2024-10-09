const palavras = ["pinto", "cu", "banana", "programagem", "psiu", "mocada", "campeao"];
let tentativasUsadas = 0;
let botoes = document.getElementById('botoes');
let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let palavraSecreta, palavraOculta, jogando

iniciarJogo();

function iniciarJogo() {
    botoes.innerHTML = '';
    letras.forEach((value, index) => {
        botoes.innerHTML += `<button id='btn=${value}' class='btn btn-dark me-2 mb-2' onclick='checarLetra("${value}")'>${value}</button>`;
    });
    jogando = true;
    tentativasUsadas = 0;
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    palavraOculta = '';
    for (let i = 0; i < palavraSecreta.length; i++) {
        palavraOculta += '_ ';
    }
    document.querySelector('h2').innerHTML = palavraOculta;
    document.getElementById('btnReiniciar').classList.add('d-none');
    desenharForca(0)
}




function desenharForca(tentativasErradas) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 6;

    // Base da Forca
    ctx.beginPath();
    ctx.strokeStyle = '#006700';
    ctx.moveTo(20, canvas.height - 10);
    ctx.lineTo(180, canvas.height - 10);
    ctx.stroke();

    // Poste da Forca
    ctx.beginPath();
    ctx.strokeStyle = '#4e2708';
    ctx.moveTo(60, canvas.height - 10);
    ctx.lineTo(60, 20);
    ctx.stroke();

    // Pau da Forca
    ctx.beginPath();
    ctx.strokeStyle = '#4e2708';
    ctx.moveTo(60, canvas.height - 10);
    ctx.lineTo(130, canvas.height - 10);
    ctx.stroke();
}