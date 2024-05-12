const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 200;

const lalaImg = new Image();
lalaImg.src = '../images/boneca-do-jogo.png'; // Atualize o caminho

const obstaculoImg = new Image();
obstaculoImg.src = '../images/logo.png'; // Atualize o caminho para a imagem do obstáculo

let lala = {
    x: 10,
    y: 140,
    width: 54,
    height: 47,
    jumping: false
};

let gravity = 0.4;
let velocity = 0.1;
let score = 0;
let obstacles = [];
let gameOver = false;

// Tamanhos variáveis para o obstáculo
const obstaculoWidth = 20; // Defina a largura desejada
const obstaculoHeight = 30; // Defina a altura desejada

document.addEventListener('keydown', function (event) {
    if (event.code === "Space" && !lala.jumping) {
        velocity = -10;
        lala.jumping = true;
    }
});

function drawLala() {
    ctx.drawImage(lalaImg, lala.x, lala.y, lala.width, lala.height);
}

function drawObstacles() {
    obstacles.forEach((obstacle, index) => {
        obstacle.x -= 2.5; // Velocidade do obstáculo
        ctx.drawImage(obstaculoImg, obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        // Verifica colisão
        if (lala.x < obstacle.x + obstacle.width &&
            lala.x + lala.width > obstacle.x &&
            lala.y < obstacle.y + obstacle.height &&
            lala.height + lala.y > obstacle.y) {
            gameOver = true;
        }

        // Remove obstáculos que saem da tela
        if (obstacle.x + obstacle.width < 0) {
            obstacles.splice(index, 1);
            score++;
        }
    });
}

function updateGame() {
    if (!gameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawLala();
        drawObstacles();

        if (lala.jumping) {
            lala.y += velocity;
            velocity += gravity;
            if (lala.y > 140) {
                lala.y = 140;
                lala.jumping = false;
            }
        }

        // Cria obstáculos com tamanhos variáveis
        if (Math.random() < 0.01) { // Ajuste a taxa de aparecimento conforme necessário
            obstacles.push({
                x: canvas.width,
                y: 195 - obstaculoHeight,
                width: obstaculoWidth,
                height: obstaculoHeight
            });
        }

        ctx.font = '20px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText('Score: ' + score, 700, 30);

        requestAnimationFrame(updateGame);
    } else {
        ctx.font = '30px Arial';
        ctx.fillStyle = 'blue';
        ctx.fillText('Game Over! Score: ' + score, 250, 100);
    }
}

lalaImg.onload = obstaculoImg.onload = updateGame;
 