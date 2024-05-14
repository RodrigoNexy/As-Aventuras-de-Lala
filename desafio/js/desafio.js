const lala = document.querySelector('.lala');
const obstaculo = document.querySelector('.obstaculo');
const gameover = document.querySelector('.over');
const gameover2 = document.querySelector('.over2');
const jumpCounter = document.getElementById('jumpCounter'); // Acessando o elemento do contador

let jumpCount = 0; // Variável para contar os pulos

const jump = () => {
    lala.classList.add('jump');

    setTimeout(() => {
        lala.classList.remove('jump');
    }, 500);

    jumpCount++; // Incrementa o contador de pulos
    jumpCounter.innerText = `Pulos: ${jumpCount}`; // Atualiza o texto do contador no HTML
    checkJumpSuccess(); // Verifica se o jogador pulou 10 vezes sem colidir
}

const checkJumpSuccess = () => {
    if (jumpCount >= 10) {
        window.alert('Parabéns amor você conseguiu, vamos ao proximo desafio')
        window.location.href = '/desafio/quiz.html'; // Redireciona para outra página
    }
}

const loop = setInterval(() => {
    const obstaculoPosition = obstaculo.offsetLeft;
    const lalaPosition = +window.getComputedStyle(lala).bottom.replace('px','');

    if (obstaculoPosition <= 110 && obstaculoPosition > 0 && lalaPosition < 80) {
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculoPosition}px`;
        
        lala.style.animation = 'none';
        lala.style.bottom = `${lalaPosition}px`;

        lala.src = './images/logo.png';
        lala.style.width = '120px';

        gameover.style.display = 'block';
        gameover2.style.display = 'block';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
