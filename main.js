const palavras = ["pinto", "cu", "banana", "programagem", "psiu", "mocada", "campeao", 'abacaxi', 'elefante', 'livro', 'computador', 'chocolate', 'carro', 'montanha', 'estrela', 'borboleta', 'amizade', 'jardim', 'musica', 'cinema', 'relogio', 'oceano', 'cafe', 'futebol', 'viagem', 'liberdade'];

let tentativasUsadas = 0;
let botoes = document.getElementById('botoes');
let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let palavraSecreta, palavraOculta, jogando

iniciarJogo();

function iniciarJogo() {
    botoes.innerHTML = '';
    letras.forEach((value, index) => {
        botoes.innerHTML += `<button id='btn-${value}' class='btn btn-outline-dark me-2 mb-2' onclick='checarLetra("${value}")'>${value}</button>`;
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

function checarLetra(letra) {
    if (!jogando) return;
    let btn = document.getElementById('btn-' + letra);
    let achou = false;
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] == letra.toLowerCase()) {
            achou = true;
            palavraOculta = trocaLetra(palavraOculta, letra, i)
        }
    }
    btn.classList.remove('btn-outline-dark');
    btn.classList.add(achou ? 'btn-primary' : 'btn-danger');
    document.querySelector('h2').innerHTML = palavraOculta;
    if (!achou) {
        tentativasUsadas++;
        desenharForca(tentativasUsadas);
    }
    checarJogo();
}

function checarJogo() {
    if (tentativasUsadas == 7) {
        Swal.fire({
            icon: 'error',
            title: 'Oooopsss...',
            text: 'Voce perdeu!!!!'
        });
        jogando = false;
        document.getElementById('btnReiniciar').classList.remove('d-none');
    }
    let listaTexto = palavraOculta.split(" ");
    let novaPalavra = listaTexto.join("");
    if (palavraSecreta == novaPalavra.toLowerCase()) {
        Swal.fire({
            icon: 'success',
            title: 'aeeeeeeeee',
            text: 'Você ganhou'
        })
        jogando = false;
        document.getElementById('btnReiniciar').classList.remove('d-none');
    }
}


function trocaLetra(textoOriginal, letra, posicao) {
    let listaTexto = textoOriginal.split(" ");
    listaTexto[posicao] = letra;
    return listaTexto.join(" ");
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
    ctx.strokeStyle = '#000000';
    ctx.moveTo(60, canvas.height - 10);
    ctx.lineTo(60, 20);
    ctx.stroke();

    // Trava horizontal
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.moveTo(60, 20);
    ctx.lineTo(135, 20);
    ctx.stroke();

    // Corda
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.moveTo(135, 20);
    ctx.lineTo(135, 30);
    ctx.stroke();

    // Viga diagonal
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.moveTo(80, 20);
    ctx.lineTo(60, 40);
    ctx.stroke();

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;

    // Cabeça
    if (tentativasErradas >= 1) {
        ctx.beginPath();
        ctx.arc(135, 45, 15, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Corpo
    if (tentativasErradas >= 2) {
        ctx.beginPath();
        ctx.moveTo(135, 60);
        ctx.lineTo(135, 120);
        ctx.stroke();
    }

    // Braço esquerdo
    if (tentativasErradas >= 3) {
        ctx.beginPath();
        ctx.moveTo(135, 70);
        ctx.lineTo(110, 100);
        ctx.stroke();
    }

    // Braço direito
    if (tentativasErradas >= 4) {
        ctx.beginPath();
        ctx.moveTo(135, 70);
        ctx.lineTo(160, 100);
        ctx.stroke();
    }

    // Perna esquerda
    if (tentativasErradas >= 5) {
        ctx.beginPath();
        ctx.moveTo(135, 120);
        ctx.lineTo(100, 150);
        ctx.stroke();
    }

    // Perna esquerda
    if (tentativasErradas >= 6) {
        ctx.beginPath();
        ctx.moveTo(135, 120);
        ctx.lineTo(170, 150);
        ctx.stroke();
    }

    // Pipi
    if (tentativasErradas >= 7) {
        ctx.beginPath();
        ctx.strokeStyle = '#FF0000';
        ctx.moveTo(135, 120);
        ctx.lineTo(135, 140);
        ctx.stroke();
    }
    // Pipi cabeça
    if (tentativasErradas >= 7) {
        ctx.beginPath();
        ctx.strokeStyle = '#A020F0';
        ctx.moveTo(135, 135);
        ctx.lineTo(135, 140);
        ctx.stroke();
    }
}