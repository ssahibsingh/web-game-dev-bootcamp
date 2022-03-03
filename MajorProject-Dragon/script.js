score = 0;
cross = true;
let lifeCount = document.getElementById('lifecount').textContent;
let life = document.getElementById('life');

audio = new Audio('assets/music/jump.mp3');
audiogo = new Audio('assets/music/mario_die.mp3');

setTimeout(() => {
    audio.play()
}, 1000);


document.onkeydown = function (e) {
    // console.log(e.keyCode);
    if (e.keyCode == 38) {
        mario = document.querySelector('.mario');
        mario.classList.add('animateMario');
        setTimeout(() => {
            audio.play();
            mario.classList.remove('animateMario')
        }, 700);
    }
    if (e.keyCode == 39) {
        mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = marioX + 112 + "px";
    }
    if (e.keyCode == 37) {
        mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = (marioX - 112) + "px";
    }
}

setInterval(() => {
    mario = document.querySelector('.mario');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox); 
    offsetY = Math.abs(dy - oy);


    if (offsetX < 250 && offsetY < 52) {
        if (lifeCount == 0) {
            gameOver.innerHTML = "Game Over!"
            obstacle.classList.remove('obstacleAni')
            audiogo.play();
            audio.pause();
            setTimeout(() => {
                audiogo.pause();
            }, 5000);

        }
        else {
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
            lifeCount--;
            // obstacle.classList.remove('obstacleAni')
            life.innerHTML = "Remaining Live : " + lifeCount;
        }
    }
    else if (offsetX <350 && cross) {
        score += 5;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';

        }, 500);


    }

}, 1000);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}